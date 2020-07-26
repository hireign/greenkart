const Cart = require('../models/cart');
const CartProductList = require('../models/cart-product-list');

/**
 * @author Aman Vishnani
 * 
 * File for calling REST APIs in cart Management Module
 * 
 */

 /**
  * Returns Cart details for a given userId
  * 
  * @param {number} userId User's id for finding cart details.
  */
async function findCartByUserId(userId) {
    let cart =  await Cart.findOne({
        where: {
          'userId': userId
        }
    })
    return cart;
}

/**
 * Create Cart for a given userId if not exist
 * 
 * @param {number} userId 
 */
async function createCartByUserId(userId) {
    let cart = await Cart.create({
        'userId': userId,
        'createdOn': new Date()
    })
    return cart;
}

/**
 * Find Row for a cartItem given cartId and productId
 * @param {number} cartId 
 * @param {number} productId 
 */
async function findCartItemByCartIdAndProductId(cartId, productId) {
    let item = await CartProductList.findOne({
        where: {
          cartId,
          productId
        }
    })
    return item;
}

/**
 * Create a product row Item for a given cart.
 * @param {number} cartId 
 * @param {number} productId 
 */
async function createProductItem(cartId, productId) {
    let item = await CartProductList.create({
        cartId,
        productId,
        'quantity': 1
    })
    return item;
}

/**
 * Find a cart item by given cartId
 * 
 * @param {number} cartId 
 */
async function findCartItemByCartId(cartId) {
    let item = await CartProductList.findAll({
        where: {
          cartId
        }
    })
    return item;
}

module.exports = {
    createProductItem,
    findCartByUserId,
    findCartItemByCartIdAndProductId,
    createCartByUserId,
    findCartItemByCartId
}