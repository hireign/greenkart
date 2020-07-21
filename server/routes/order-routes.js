const express = require('express');
const { deleteByOrderId, getAllOrders, getOrderByOrderId } = require('../controllers/order-controller')

const router = express.Router();

/**
 * Author: Aman Vishnani (aman.vishnani@dal.ca)
 * 
 * Routes for Orders
 */

router.get('/', getAllOrders)

/**
 * Should get the current state of the order
 * 
 * Expected: orderId of type integer that exists
 */
router.get('/:orderId', getOrderByOrderId)

/**
 * Should Cancel the order if current state is 'ORDERED'
 * 
 * Expected: orderId of type integer that exists
 */
router.delete('/:orderId', deleteByOrderId)

module.exports = router;