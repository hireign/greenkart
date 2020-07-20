const express = require('express');
const Order = require('../models/order');
const OrderDetails = require('../models/orderDetails');
const PRODUCTS = require('../models/product');

const router = express.Router();

/**
 * Author: Aman Vishnani (aman.vishnani@dal.ca)
 * 
 * Routes for Orders
 */

router.get('/', async (req, res) => {
    let resp = await Order.findAll({
        include: [PRODUCTS]
    })
    res.send(resp)
})

/**
 * Should create an order given the parameters.
 * 
 * @TODO: Decide Schema
 * 
 */
// router.post('/', createOrder)

/**
 * Should Cancel the order if current state is 'ORDERED'
 * 
 * Expected: orderId of type integer that exists
 */
// router.delete('/:orderId', getOrsderByUserId)

module.exports = router;