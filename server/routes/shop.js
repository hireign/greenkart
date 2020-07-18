

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();



router.get('/products', shopController.getProducts);


module.exports = router;
