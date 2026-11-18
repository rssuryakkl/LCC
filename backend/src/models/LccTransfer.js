const mongoose = require('mongoose');

const lccTransferSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      trim: true,
      uppercase: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    date: {
      type: String,
      required: true,
      trim: true
    },
    switchedBy: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      default: 'LCC',
      trim: true
    },
    previousWarehouseStock: {
      type: Number,
      default: 0
    },
    remainingWarehouseStock: {
      type: Number,
      default: 0
    },
    remarks: {
      type: String,
      default: 'Transferred to LCC inventory'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('LccTransfer', lccTransferSchema);
