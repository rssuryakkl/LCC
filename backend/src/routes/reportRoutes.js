const express = require('express');
const router = express.Router();
const {
  getAllReports,
  createReport,
  deleteReport,
  clearAllReports
} = require('../controllers/reportController');

// Routes for Reports
router.get('/', getAllReports);
router.post('/', createReport);
router.delete('/:id', deleteReport);
router.delete('/', clearAllReports);

module.exports = router;
