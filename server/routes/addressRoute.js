const express = require('express');

const addressController = require('../controllers/addressController');

const router = express.Router();

router.get('/getAddress', addressController.getAddress);
router.post('/saveEditAddress', addressController.saveAndUpdateAdress);
router.post('/deleteAddress', addressController.deleteAddress);


module.exports = router;
