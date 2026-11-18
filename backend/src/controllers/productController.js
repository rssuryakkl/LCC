const Product = require('../models/Product');
const LccTransfer = require('../models/LccTransfer');
const { recordReportEntry } = require('./reportController');
const mongoose = require('mongoose');

// Helper to find a product by either MongoDB ObjectId or custom productId (e.g. 'SA_102')
const findProductByIdOrCode = async (identifier) => {
  if (!identifier) return null;
  const trimmed = String(identifier).trim();

  let product = null;
  if (mongoose.Types.ObjectId.isValid(trimmed)) {
    product = await Product.findById(trimmed);
  }
  if (!product) {
    product = await Product.findOne({ productId: trimmed.toUpperCase() });
  }
  if (!product) {
    product = await Product.findOne({ productId: trimmed });
  }
  return product;
};

// 1. GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search && search.trim()) {
      const regex = new RegExp(search.trim(), 'i');
      query = {
        $or: [
          { productId: regex },
          { name: regex },
          { sponsorName: regex },
          { location: regex }
        ]
      };
    }

    const products = await Product.find(query).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: products.length,
      products
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
      error: error.message
    });
  }
};

// 2. GET SINGLE PRODUCT
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await findProductByIdOrCode(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    return res.status(200).json({
      success: true,
      product
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch product',
      error: error.message
    });
  }
};

// 3. ADD PRODUCT
const addProduct = async (req, res) => {
  try {
    const {
      productId,
      name,
      quantity,
      receivedDate,
      sponsorName,
      image,
      location,
      updatedBy,
      addedBy
    } = req.body;

    // Validation
    if (!productId || !productId.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Product ID is required'
      });
    }

    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Product name is required'
      });
    }

    const cleanProductId = productId.trim().toUpperCase();
    const cleanName = name.trim();
    const cleanQty = Number(quantity);

    if (isNaN(cleanQty) || cleanQty < 0) {
      return res.status(400).json({
        success: false,
        message: 'Quantity must be a positive number'
      });
    }

    if (!location || !location.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Storage location is required'
      });
    }

    // Check duplicate productId
    const existingById = await Product.findOne({ productId: cleanProductId });
    if (existingById) {
      return res.status(409).json({
        success: false,
        message: `Product ID "${cleanProductId}" is already used by "${existingById.name}".`
      });
    }

    // Check duplicate product by name
    const existingByName = await Product.findOne({
      name: { $regex: new RegExp(`^${cleanName}$`, 'i') }
    });
    if (existingByName) {
      return res.status(409).json({
        success: false,
        message: `"${existingByName.name}" already exists in the warehouse (${existingByName.productId}). Use "Restock" to add stock.`
      });
    }

    const todayDate = new Date().toISOString().split('T')[0];
    const newProduct = new Product({
      productId: cleanProductId,
      name: cleanName,
      quantity: cleanQty,
      receivedDate: receivedDate || todayDate,
      sponsorName: (sponsorName || '').trim(),
      image: image || '',
      location: location.trim(),
      updatedBy: (updatedBy || addedBy || 'Admin').trim(),
      addedBy: (addedBy || updatedBy || 'Admin').trim()
    });

    await newProduct.save();

    // Automatically record in reports history
    await recordReportEntry({
      productId: cleanProductId,
      productName: cleanName,
      eventType: 'PRODUCT_ADDED',
      eventTitle: 'Product Added',
      quantityChange: cleanQty,
      previousStock: 0,
      newStock: cleanQty,
      location: location.trim(),
      updatedBy: (addedBy || updatedBy || 'Admin').trim(),
      remarks: (sponsorName || '').trim() ? `Sponsor: ${sponsorName.trim()}` : `Added by ${(addedBy || updatedBy || 'Admin').trim()}`,
      date: receivedDate || todayDate
    });

    return res.status(201).json({
      success: true,
      message: 'Product added successfully',
      product: newProduct
    });
  } catch (error) {
    console.error('Error adding product:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to add product',
      error: error.message
    });
  }
};

// 4. EDIT PRODUCT
const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await findProductByIdOrCode(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    const {
      productId,
      name,
      quantity,
      receivedDate,
      sponsorName,
      image,
      location,
      updatedBy
    } = req.body;

    const prevQty = product.quantity;
    const prevLocation = product.location;
    const prevName = product.name;

    // Check if new productId conflicts with another product
    if (productId && productId.trim()) {
      const cleanNewId = productId.trim().toUpperCase();
      if (cleanNewId !== product.productId) {
        const conflict = await Product.findOne({
          productId: cleanNewId,
          _id: { $ne: product._id }
        });
        if (conflict) {
          return res.status(409).json({
            success: false,
            message: `Product ID "${cleanNewId}" is already used by "${conflict.name}".`
          });
        }
        product.productId = cleanNewId;
      }
    }

    if (name && name.trim()) {
      product.name = name.trim();
    }

    if (quantity !== undefined && quantity !== null) {
      const cleanQty = Number(quantity);
      if (isNaN(cleanQty) || cleanQty < 0) {
        return res.status(400).json({
          success: false,
          message: 'Quantity must be a positive number'
        });
      }
      product.quantity = cleanQty;
    }

    if (receivedDate) product.receivedDate = receivedDate.trim();
    if (sponsorName !== undefined) product.sponsorName = sponsorName.trim();
    if (image !== undefined) product.image = image;
    if (location && location.trim()) product.location = location.trim();
    if (updatedBy && updatedBy.trim()) product.updatedBy = updatedBy.trim();

    await product.save();

    // Automatically record in reports history
    await recordReportEntry({
      productId: product.productId,
      productName: product.name,
      eventType: 'PRODUCT_UPDATED',
      eventTitle: 'Product Updated',
      quantityChange: product.quantity - prevQty,
      previousStock: prevQty,
      newStock: product.quantity,
      location: product.location,
      updatedBy: (updatedBy || 'Admin').trim(),
      remarks: `Product details updated by ${(updatedBy || 'Admin').trim()}`,
      date: product.receivedDate
    });

    return res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      product
    });
  } catch (error) {
    console.error('Error updating product:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update product',
      error: error.message
    });
  }
};

// 5. RESTOCK PRODUCT
const restockProduct = async (req, res) => {
  try {
    const targetId = req.params.id || req.body.productId || req.body.id;
    if (!targetId) {
      return res.status(400).json({
        success: false,
        message: 'Product ID is required for restock'
      });
    }

    const product = await findProductByIdOrCode(targetId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found to restock'
      });
    }

    const addedQty = Number(req.body.quantity);
    if (!Number.isSafeInteger(addedQty) || addedQty <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Restock quantity must be a positive whole number (at least 1 PCS)'
      });
    }

    const previousStock = product.quantity;
    product.quantity += addedQty;

    if (req.body.updatedBy && req.body.updatedBy.trim()) {
      product.updatedBy = req.body.updatedBy.trim();
    }
    if (req.body.date && req.body.date.trim()) {
      product.receivedDate = req.body.date.trim();
    }

    await product.save();

    // Automatically record in reports history
    await recordReportEntry({
      productId: product.productId,
      productName: product.name,
      eventType: 'STOCK_RECEIVED',
      eventTitle: 'Stock Received',
      quantityChange: addedQty,
      previousStock,
      newStock: product.quantity,
      location: product.location,
      updatedBy: (req.body.updatedBy || 'Admin').trim(),
      remarks: `Stock updated (+${addedQty} PCS)`,
      date: product.receivedDate
    });

    return res.status(200).json({
      success: true,
      message: 'Stock updated successfully',
      product,
      previousStock,
      addedQuantity: addedQty,
      newStock: product.quantity
    });
  } catch (error) {
    console.error('Error restocking product:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to restock product',
      error: error.message
    });
  }
};

// 6. MOVE TO LCC (TRANSFER)
const moveToLcc = async (req, res) => {
  try {
    const { productId, quantity, switchedBy, date, location } = req.body;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: 'Product is required for transfer'
      });
    }

    const transferQty = Number(quantity);
    if (!Number.isSafeInteger(transferQty) || transferQty <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Transfer quantity must be a positive whole number'
      });
    }

    if (!switchedBy || !switchedBy.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Switched By (responsible person) is required'
      });
    }

    const product = await findProductByIdOrCode(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found in warehouse'
      });
    }

    if (transferQty > product.quantity) {
      return res.status(400).json({
        success: false,
        message: `Insufficient warehouse stock. Requested: ${transferQty} PCS, Available: ${product.quantity} PCS`
      });
    }

    const previousStock = product.quantity;
    product.quantity -= transferQty;
    await product.save();

    // Automatically record in reports history
    await recordReportEntry({
      productId: product.productId,
      productName: product.name,
      eventType: 'STOCK_TRANSFERRED',
      eventTitle: 'Stock Transferred to LCC',
      quantityChange: -transferQty,
      previousStock,
      newStock: product.quantity,
      location: (location || product.location || 'LCC').trim(),
      updatedBy: switchedBy.trim(),
      remarks: `Transferred ${transferQty} PCS to LCC by ${switchedBy.trim()}`,
      date: date || todayDate
    });

    const todayDate = new Date().toISOString().split('T')[0];
    const transferRecord = new LccTransfer({
      productId: product.productId,
      name: product.name,
      quantity: transferQty,
      date: date || todayDate,
      switchedBy: switchedBy.trim(),
      location: (location || product.location || 'LCC').trim(),
      previousWarehouseStock: previousStock,
      remainingWarehouseStock: product.quantity,
      remarks: `Transferred ${transferQty} PCS to LCC by ${switchedBy.trim()}`
    });

    await transferRecord.save();

    return res.status(200).json({
      success: true,
      message: 'Product transferred to LCC successfully',
      transfer: transferRecord,
      remainingWarehouseStock: product.quantity
    });
  } catch (error) {
    console.error('Error moving product to LCC:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to transfer product to LCC',
      error: error.message
    });
  }
};

// 7. GET LCC TRANSFERS
const getLccTransfers = async (req, res) => {
  try {
    const transfers = await LccTransfer.find({}).sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: transfers.length,
      transfers
    });
  } catch (error) {
    console.error('Error fetching LCC transfers:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch LCC transfers',
      error: error.message
    });
  }
};

// 8. DELETE PRODUCT
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await findProductByIdOrCode(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    await Product.findByIdAndDelete(product._id);

    // Automatically record in reports history
    await recordReportEntry({
      productId: product.productId,
      productName: product.name,
      eventType: 'PRODUCT_DELETED',
      eventTitle: 'Product Deleted',
      quantityChange: -product.quantity,
      previousStock: product.quantity,
      newStock: 0,
      location: product.location,
      updatedBy: 'Admin',
      remarks: 'Product removed from warehouse inventory'
    });

    return res.status(200).json({
      success: true,
      message: `Product "${product.name}" (${product.productId}) deleted successfully`
    });
  } catch (error) {
    console.error('Error deleting product:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete product',
      error: error.message
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  editProduct,
  restockProduct,
  moveToLcc,
  getLccTransfers,
  deleteProduct
};
