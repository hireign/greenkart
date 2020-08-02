/**
 * Routes for search related REST API calls
 *
 * @author [Hiren Khant](hr266981@dal.ca)
 */
const express = require('express');
const searchController = require('../controllers/searchController');
const router = express.Router();

router.get('/searchBackend', searchController.getAllProducts);
router.get('/searched/:queryterm', searchController.searchProduct);

module.exports = router;
