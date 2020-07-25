const User = require('../models/user');
const Cart = require('../models/cart');
const Product = require('../models/product');
const Address = require('../models/address');
const Payment = require('../models/payment');
const Order = require('../models/order');
const OrderDetails = require('../models/order-details');
const CartProductList = require('../models/cart-product-list');
const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const { QueryTypes } = require('sequelize');
const date = require("date-and-time");
const { createCartByUserId, createProductItem, findCartByUserId, findCartItemByCartId } = require('../services/cart-service')

exports.createPayment = async (req, res, next) => {
  const now = new Date();
  const dd = date.format(now, "YYYY/MM/DD");
  const userId= req.session.user.user_id;
  const paymentAmount = parseInt(req.body.paymentAmount);
  const cardNumber = req.body.cardNumber;
  

  let cart = await findCartByUserId(userId);
  if (null == cart) {
    res.status(200).send("No cart found");
  }

  let cartData = cart.get();
  let cartId = cartData.id
  let cartProducts = await findCartItemByCartId(cartId);
//array
let address = await getAddress(userId);

let order = await insertIntoOrders(address.id, "In Process", userId);

await cartProducts.map(cartProduct => insertIntoOrderDetails(cartProduct.productId, order.id, cartProduct.quantity));
await cartProducts.map(cartProduct => deleteCartProduts(cartProduct.id));
let payment = await insertIntoPayment(order.id, userId, paymentAmount, cardNumber, dd);
if(payment){
  res.status(200).send("Payment Mapped to order")
}
};
  


  async function getAddress(userId) {
    try {
        let resp = await Address.findOne({
            where: {
              user_id: parseInt(userId)
    }
        })
        return resp;
    } catch (error) {
        console.log(error);
    }
}

async function insertIntoOrders(addressId, status, userId) {
  try {
      let resp = await Order.create({
        addressId: addressId,
        deliveryStatus: status,
        userId: userId
  })
      return resp;
  } catch (error) {
      console.log(error);
  }
}

async function insertIntoOrderDetails(productId, orderId, quantity) {
  try {
      let resp =  await OrderDetails.create({
        productId: productId,
        orderId: orderId,
        quantity: quantity
  })
      return resp;
  } catch (error) {
      console.log(error);
  }
}

async function deleteCartProduts(cartProductId) {
  try {
      let resp =  await CartProductList.destroy({
        where: {
          id: parseInt(cartProductId)
}})
      return resp;
  } catch (error) {
      console.log(error);
  }
}

async function insertIntoPayment(orderId, userId, amount, cardNumber, paymentDate) {
  try {
      let resp = await Payment.create({
        orderId: orderId,
        userId: userId,
        paymentAmount: amount,
        cardNumber: cardNumber,
        paymentDate: paymentDate
  })
      return resp;
  } catch (error) {
      console.log(error);
  }
}
