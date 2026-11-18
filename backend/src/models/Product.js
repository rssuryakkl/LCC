const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
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
      min: 0,
      default: 0
    },
    receivedDate: {
      type: String,
      required: true,
      trim: true
    },
    sponsorName: {
      type: String,
      default: '',
      trim: true
    },
    image: {
      type: String,
      default: ''
    },
    location: {
      type: String,
      required: true,
      trim: true
    },
    updatedBy: {
      type: String,
      default: 'Admin',
      trim: true
    },
    addedBy: {
      type: String,
      default: 'Admin',
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', productSchema);
