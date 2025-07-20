const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
  size: String,
  color: String,
  stock: Number
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller' },
  variants: [variantSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);