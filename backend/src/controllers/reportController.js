const Report = require('../models/Report');
const Product = require('../models/Product');
const LccTransfer = require('../models/LccTransfer');
const mongoose = require('mongoose');

const titleMap = {
  STOCK_RECEIVED: 'Stock Received',
  PRODUCT_ADDED: 'Product Added',
  STOCK_TRANSFERRED: 'Stock Transferred to LCC',
  PRODUCT_UPDATED: 'Product Updated',
  PRODUCT_DELETED: 'Product Deleted',
  LCC_TRANSFER_DELETED: 'LCC Transfer Removed',
  LCC_STOCK_UPDATED: 'LCC Stock Updated',
  DISTRIBUTION: 'Transferred to Distribution'
};

const getFormattedDate = () => {
  const d = new Date();
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
};

const getFormattedTime = () => {
  const d = new Date();
  return d.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
};

const generateRecordId = async () => {
  const count = await Report.countDocuments();
  const random = Math.floor(Math.random() * 900 + 100);
  return `RPT-${String(count + 1).padStart(4, '0')}-${random}`;
};

/**
 * Programmatic helper to record a report entry directly to MongoDB
 */
const recordReportEntry = async ({
  productId,
  productName,
  eventType,
  eventTitle,
  quantityChange,
  previousStock = 0,
  newStock = 0,
  location = 'Vadalur',
  updatedBy = 'System',
  remarks = '',
  date,
  time,
  timestamp
}) => {
  try {
    // Avoid double recording if identical entry was created within the last 3 seconds
    const threeSecondsAgo = Date.now() - 3000;
    const duplicate = await Report.findOne({
      productId: String(productId || 'N/A').toUpperCase(),
      eventType: eventType || 'PRODUCT_UPDATED',
      quantityChange: Number(quantityChange) || 0,
      timestamp: { $gte: threeSecondsAgo }
    });
    if (duplicate) {
      return duplicate;
    }

    const recordId = await generateRecordId();
    const finalDate = date || getFormattedDate();
    const finalTime = time || getFormattedTime();
    const finalTitle = eventTitle || titleMap[eventType] || 'Inventory Action';

    const report = new Report({
      recordId,
      date: finalDate,
      time: finalTime,
      productId: String(productId || 'N/A').toUpperCase(),
      productName: String(productName || 'Unknown Product'),
      eventType: eventType || 'PRODUCT_UPDATED',
      eventTitle: finalTitle,
      quantityChange: Number(quantityChange) || 0,
      previousStock: Number(previousStock) || 0,
      newStock: Number(newStock) || 0,
      location: location || 'Vadalur',
      updatedBy: (updatedBy || 'System').trim(),
      remarks: remarks || '',
      timestamp: timestamp || Date.now()
    });

    await report.save();
    return report;
  } catch (error) {
    console.error('Failed to save report entry:', error.message);
    return null;
  }
};

/**
 * 1. GET ALL REPORTS
 */
const getAllReports = async (req, res) => {
  try {
    const { search, eventType, date, sort = 'newest' } = req.query;

    // Check if reports collection is empty, and backfill existing product and transfer history if so
    const existingCount = await Report.countDocuments();
    if (existingCount === 0) {
      await backfillInitialHistory();
    }

    let filter = {};

    if (eventType && eventType !== 'ALL') {
      filter.eventType = eventType;
    }

    if (date && date.trim()) {
      filter.date = date.trim();
    }

    if (search && search.trim()) {
      const regex = new RegExp(search.trim(), 'i');
      filter.$or = [
        { recordId: regex },
        { productId: regex },
        { productName: regex },
        { eventTitle: regex },
        { updatedBy: regex },
        { location: regex },
        { remarks: regex }
      ];
    }

    const sortDirection = sort === 'oldest' ? 1 : -1;
    const reports = await Report.find(filter).sort({ timestamp: sortDirection, createdAt: sortDirection });

    return res.status(200).json({
      success: true,
      count: reports.length,
      reports
    });
  } catch (error) {
    console.error('Error fetching reports:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch reports',
      error: error.message
    });
  }
};

/**
 * Backfills existing products and transfers into reports if reports collection is empty
 */
const backfillInitialHistory = async () => {
  try {
    const products = await Product.find().sort({ createdAt: 1 });
    const transfers = await LccTransfer.find().sort({ createdAt: 1 });

    for (const p of products) {
      const recordId = await generateRecordId();
      const pTime = p.createdAt ? new Date(p.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }) : getFormattedTime();
      await Report.create({
        recordId,
        date: p.receivedDate || getFormattedDate(),
        time: pTime,
        productId: p.productId,
        productName: p.name,
        eventType: 'PRODUCT_ADDED',
        eventTitle: 'Product Added',
        quantityChange: p.quantity,
        previousStock: 0,
        newStock: p.quantity,
        location: p.location || 'Vadalur',
        updatedBy: p.addedBy || p.updatedBy || 'SHASHI',
        remarks: p.sponsorName ? `Sponsor: ${p.sponsorName}` : 'Initial product entry',
        timestamp: p.createdAt ? new Date(p.createdAt).getTime() : Date.now() - 60000
      });
    }

    for (const t of transfers) {
      const recordId = await generateRecordId();
      const tTime = t.createdAt ? new Date(t.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }) : getFormattedTime();
      await Report.create({
        recordId,
        date: t.date || getFormattedDate(),
        time: tTime,
        productId: t.productId,
        productName: t.name,
        eventType: 'STOCK_TRANSFERRED',
        eventTitle: 'Stock Transferred to LCC',
        quantityChange: -t.quantity,
        previousStock: t.previousWarehouseStock ?? (t.remainingWarehouseStock + t.quantity),
        newStock: t.remainingWarehouseStock ?? 0,
        location: t.location || 'Vadalur',
        updatedBy: t.switchedBy || 'Surya',
        remarks: t.remarks || `Transferred ${t.quantity} PCS to LCC`,
        timestamp: t.createdAt ? new Date(t.createdAt).getTime() : Date.now()
      });
    }
  } catch (err) {
    console.error('Error backfilling initial history:', err);
  }
};

/**
 * 2. CREATE REPORT ENTRY
 */
const createReport = async (req, res) => {
  try {
    const {
      productId,
      productName,
      eventType,
      eventTitle,
      quantityChange,
      previousStock,
      newStock,
      location,
      updatedBy,
      remarks,
      date,
      time,
      id
    } = req.body;

    if (!productId || !productName) {
      return res.status(400).json({
        success: false,
        message: 'Product ID and Product Name are required'
      });
    }

    const recordId = id || await generateRecordId();
    const finalDate = date || getFormattedDate();
    const finalTime = time || getFormattedTime();
    const finalTitle = eventTitle || titleMap[eventType] || 'Inventory Action';

    const report = new Report({
      recordId,
      date: finalDate,
      time: finalTime,
      productId: String(productId).toUpperCase().trim(),
      productName: String(productName).trim(),
      eventType: eventType || 'PRODUCT_UPDATED',
      eventTitle: finalTitle,
      quantityChange: Number(quantityChange) || 0,
      previousStock: Number(previousStock) || 0,
      newStock: Number(newStock) || 0,
      location: (location || 'Vadalur').trim(),
      updatedBy: (updatedBy || 'System').trim(),
      remarks: (remarks || '').trim(),
      timestamp: Date.now()
    });

    await report.save();

    return res.status(201).json({
      success: true,
      message: 'Report recorded successfully',
      report
    });
  } catch (error) {
    console.error('Error creating report:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to record report',
      error: error.message
    });
  }
};

/**
 * 3. DELETE SINGLE REPORT
 */
const deleteReport = async (req, res) => {
  try {
    const { id } = req.params;
    let deleted = null;

    if (id) {
      if (mongoose.Types.ObjectId.isValid(id)) {
        deleted = await Report.findByIdAndDelete(id);
      }
      if (!deleted) {
        deleted = await Report.findOneAndDelete({ recordId: id });
      }
    }

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Report record not found'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Report record deleted successfully',
      report: deleted
    });
  } catch (error) {
    console.error('Error deleting report:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete report',
      error: error.message
    });
  }
};

/**
 * 4. CLEAR ALL REPORTS
 */
const clearAllReports = async (req, res) => {
  try {
    await Report.deleteMany({});
    return res.status(200).json({
      success: true,
      message: 'All reports cleared successfully'
    });
  } catch (error) {
    console.error('Error clearing reports:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to clear reports',
      error: error.message
    });
  }
};

module.exports = {
  recordReportEntry,
  getAllReports,
  createReport,
  deleteReport,
  clearAllReports
};
