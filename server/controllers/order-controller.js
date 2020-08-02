const Order = require('../models/order');
const Products = require('../models/product-details');

/**
 * Author: Aman Vishnani (aman.vishnani@dal.ca)
 * 
 * Controller functions for Order Routes.
 */

async function getAllOrders(req, res, next) {
    let userId = req.session.user.user_id || -1;
    try {
        let resp = await Order.findAll({
            include: [Products],
            where: {
                userId
            }
        })
        res.send(resp)
    } catch (error) {
        next(error)
    }
}

async function getOrderByOrderId(req, res, next) {
    let userId = req.session.user.user_id || -1;
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
            let orderData = existingOrder.get()
            if(orderData.userId !== userId) {
                res.status(401)
                res.send();
            } else {
                res.status(200)
                res.send(existingOrder);
            }
        }
    } catch (error) {
        next(error)
    }
}

async function deleteByOrderId(req, res, next) {
    let userId = req.session.user.user_id || -1;
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
            if(od.userId !== userId) {
                res.status(401)
                res.send();
            }
            if(od.deliveryStatus === "In Process") {
                await existingOrder.update({
                    deliveryStatus: "Canceled"
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