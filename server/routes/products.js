/**
 * Routes for product related REST API calls
 *
 * @author [Shubham Suri](https://github.com/ssuri013)
 */
const express = require('express');
const productsController = require('../controllers/product-details');

const router = express.Router();
/**
 * Route serving login form.
 * @name get/productdetails
 * @param {integer} id - id for the product
 * @returns {Product} product - product information 
 */
router.get('/productdetails', productsController.productDetails);

/**
 * Route serving login form.
 * @name get/similarproducts
 * @param {integer} id - id for the product
 * @returns {Array of Product} products - information related to similar products 
 */
router.get('/similarproducts', productsController.similarProducts);

module.exports = router;
