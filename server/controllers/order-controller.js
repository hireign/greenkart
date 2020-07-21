const Order = require('../models/order');
const Products = require('../models/product');

/**
 * Author: Aman Vishnani (aman.vishnani@dal.ca)
 * 
 * Controller functions for Order Routes.
 */

async function getAllOrders(req, res, next) {
    try {
        let resp = await Order.findAll({
            include: [Products]
        })
        res.send(resp)
    } catch (error) {
        next(error)
    }
}

async function getOrderByOrderId(req, res, next) {
    try {
        let orderId = req.params['orderId']
        let existingOrder = await Order.findByPk(orderId, {
            include: [Products]
        })
        if (null == existingOrder) {
            res.status(404)
            res.send({
                message: "Order Not Found"
            })
        } else {
           res.send(existingOrder);
        }
    } catch (error) {
        next(error)
    }
}

async function deleteByOrderId(req, res, next) {
    try {
        let orderId = req.params['orderId']
        let existingOrder = await Order.findByPk(orderId)
        if (null == existingOrder) {
            res.status(404)
            res.send({
                message: "Order Not Found"
            })
        } else {
            let od = existingOrder.get();
            if(od.deliveryStatus === "ORDERED") {
                await existingOrder.update({
                    deliveryStatus: "CANCELED"
                })
            }
            res.send(existingOrder);
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    deleteByOrderId,
    getOrderByOrderId,
    getAllOrders
}