const express = require('express');

const paymentController = require('../controllers/paymentControlller');

const router = express.Router();
/**
 * @author [Jatin Partap Rana]
 * This is route file for payment route
 */
router.post('/payment', paymentController.createPayment);
router.post('/qucikCheckOutPayment', paymentController.quickCheckOutPayment);


module.exports = router;
