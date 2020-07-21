const express = require('express');

const addressController = require('../controllers/addressController');

const router = express.Router();

router.get('/getAddress', addressController.getAddress);
router.post('/saveEditAddress', addressController.saveAndUpdateAdress);
router.delete('/editAddress', addressController.getAddress);


module.exports = router;
