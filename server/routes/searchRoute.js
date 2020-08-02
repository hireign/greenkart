/**
 * Routes for search related REST API calls
 *
 * @author [Hiren Khant](hr266981@dal.ca)
 */
const express = require('express');
const searchController = require('../controllers/searchController');
const router = express.Router();

//returns all the products from the database
router.get('/searchBackend', searchController.getAllProducts);
//returns products based on provided parameter queryterm
router.get('/searched/:queryterm', searchController.searchProduct);

module.exports = router;
