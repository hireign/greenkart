const express = require('express');
const searchController = require('../controllers/searchController');
const router = express.Router();

router.get('/searchBackend', searchController.getAllProducts);
router.get('/search/:queryterm', searchController.searchProduct);

module.exports = router;
