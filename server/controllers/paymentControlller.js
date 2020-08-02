const Address = require('../models/address');
const Payment = require('../models/payment');
const Order = require('../models/order');
const OrderDetails = require('../models/order-details');
const CartProductList = require('../models/cart-product-list');
const date = require("date-and-time");
const { createCartByUserId, createProductItem, findCartByUserId, findCartItemByCartId } = require('../services/cart-service')

 /**
   * @author [Jatin Partap Rana]
   * This API creates the payment by taking user object from the session
   * and amount from the request body. This API inserts an entry in the order
   * and order details table. It also removes the entry from the cart table.
   * And inserts an entry in the payment table as well.
   */
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

let address = await getAddress(userId);

let order = await insertIntoOrders(address === null ? 1 : address.id, "In Process", userId);

await cartProducts.map(cartProduct => insertIntoOrderDetails(cartProduct.productId, order.id, cartProduct.quantity));
await cartProducts.map(cartProduct => deleteCartProduts(cartProduct.id));
let payment = await insertIntoPayment(order.id, userId, paymentAmount, cardNumber, dd);
if(payment){
  res.status(200).send("Payment Mapped to order")
}
};
  
exports.quickCheckOutPayment = async (req, res, next) => {
  const now = new Date();
  const dd = date.format(now, "YYYY/MM/DD");
  const userId= req.session.user.user_id;
  const paymentAmount = parseInt(req.body.paymentAmount);
  const cardNumber = req.body.cardNumber;
  const productId = req.body.productId;

  let address = await getAddress(userId);
  let order = await insertIntoOrders(address === null ? 1 : address.id, "In Process", userId);
  insertIntoOrderDetails(productId, order.id, parseInt("1"));
  let payment = await insertIntoPayment(order.id, userId, paymentAmount, cardNumber, dd);
if(payment){
  res.status(200).send("Payment Mapped to order")
}
}



/**
 * Mehtod to get address from the userId
 * @param {*} userId 
 */
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
/**
 * Method to insert data in orders table.
 * @param {*} addressId 
 * @param {*} status 
 * @param {*} userId 
 */
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
/**
 * Method to insert data in order details table.
 * @param {} productId 
 * @param {*} orderId 
 * @param {*} quantity 
 */
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
/**
 * Method to delete entry from the carts table.
 * @param {} cartProductId 
 */
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
/**
 * Method to insert entry in the payments table.
 * @param {*} orderId 
 * @param {*} userId 
 * @param {*} amount 
 * @param {*} cardNumber 
 * @param {*} paymentDate 
 */
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
