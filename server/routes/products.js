const express = require('express');
const productsController = require('../controllers/products');

const router = express.Router();

router.get('/productdetails', productsController.productDetails);

router.get('/similarproducts', productsController.similarProducts);

module.exports = router;