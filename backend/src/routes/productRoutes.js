const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  addProduct,
  editProduct,
  restockProduct,
  moveToLcc,
  getLccTransfers,
  deleteProduct
} = require('../controllers/productController');

// Product CRUD routes
router.get('/', getAllProducts);
router.post('/', addProduct);

// Restock routes
router.post('/restock', restockProduct);
router.post('/:id/restock', restockProduct);

// Move to LCC (Transfer) routes
router.post('/transfer', moveToLcc);
router.post('/move-to-lcc', moveToLcc);
router.get('/transfers', getLccTransfers);

// Single Product routes
router.get('/:id', getProductById);
router.put('/:id', editProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
