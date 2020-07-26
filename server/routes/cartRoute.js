const express = require('express');

const cartController = require('../controllers/cart-controller');

const router = express.Router();

/**
 * @author Aman Vishnani
 * 
 * Routes for REST APIs.
 * Ideally Controller and Routes should be in one files.
 */


router.get('/', cartController.getUserCart);
router.put('/', cartController.updateCart);
router.delete('/:productId', cartController.deleteProductFromCart);


module.exports = router;
