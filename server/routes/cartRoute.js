const express = require('express');

const cartController = require('../controllers/cart-controller');

const router = express.Router();



router.get('/', cartController.getUserCart);
router.put('/', cartController.updateCart);
router.delete('/:productId', cartController.deleteProductFromCart);


module.exports = router;
