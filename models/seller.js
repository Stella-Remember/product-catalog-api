const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  storeName: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Seller', sellerSchema);