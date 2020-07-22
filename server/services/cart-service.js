const Cart = require('../models/cart');
const CartProductList = require('../models/cart-product-list');

async function findCartByUserId(userId) {
    let cart =  await Cart.findOne({
        where: {
          'userId': userId
        }
    })
    return cart;
}

async function createCartByUserId(userId) {
    let cart = await Cart.create({
        'userId': userId,
        'createdOn': new Date()
    })
    return cart;
}

async function findCartItemByCartIdAndProductId(cartId, productId) {
    let item = await CartProductList.findOne({
        where: {
          cartId,
          productId
        }
    })
    return item;
}

async function createProductItem(cartId, productId) {
    let item = await CartProductList.create({
        cartId,
        productId,
        'quantity': 1
    })
    return item;
}

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