const express = require('express');

const paymentController = require('../controllers/paymentControlller');

const router = express.Router();

router.post('/payment', paymentController.createPayment);


module.exports = router;
