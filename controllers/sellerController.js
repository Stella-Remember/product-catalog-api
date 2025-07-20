const Seller = require('../models/seller');

exports.getAllSellers = async (req, res, next) => {
  try {
    const sellers = await Seller.find();
    res.json(sellers);
  } catch (err) {
    next(err);
  }
};

exports.getSeller = async (req, res, next) => {
  try {
    const seller = await Seller.findById(req.params.id);
    if (!seller) return res.status(404).json({ error: 'Seller not found' });
    res.json(seller);
  } catch (err) {
    next(err);
  }
};

exports.createSeller = async (req, res, next) => {
  try {
    const newSeller = new Seller(req.body);
    const saved = await newSeller.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};
