const express = require('express');

const paymentController = require('../controllers/paymentControlller');

const router = express.Router();
/**
 * @author [Jatin Partap Rana]
 * This is route file for payment route
 */
router.post('/payment', paymentController.createPayment);


module.exports = router;
