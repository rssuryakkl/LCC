const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema(
  {
    recordId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true
    },
    date: {
      type: String,
      required: true,
      trim: true
    },
    time: {
      type: String,
      required: true,
      trim: true
    },
    productId: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      index: true
    },
    productName: {
      type: String,
      required: true,
      trim: true
    },
    eventType: {
      type: String,
      required: true,
      trim: true,
      enum: [
        'STOCK_RECEIVED',
        'PRODUCT_ADDED',
        'STOCK_TRANSFERRED',
        'PRODUCT_UPDATED',
        'PRODUCT_DELETED',
        'LCC_TRANSFER_DELETED',
        'LCC_STOCK_UPDATED',
        'DISTRIBUTION'
      ],
      default: 'PRODUCT_UPDATED'
    },
    eventTitle: {
      type: String,
      required: true,
      trim: true
    },
    quantityChange: {
      type: Number,
      required: true
    },
    previousStock: {
      type: Number,
      default: 0
    },
    newStock: {
      type: Number,
      default: 0
    },
    location: {
      type: String,
      default: 'Vadalur',
      trim: true
    },
    updatedBy: {
      type: String,
      required: true,
      trim: true
    },
    remarks: {
      type: String,
      default: '',
      trim: true
    },
    timestamp: {
      type: Number,
      default: () => Date.now(),
      index: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Report', reportSchema);
