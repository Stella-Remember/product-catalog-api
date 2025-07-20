const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');

router.get('/', sellerController.getAllSellers);
router.get('/:id', sellerController.getSeller);
router.post('/', sellerController.createSeller);

module.exports = router;