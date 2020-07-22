const User = require('../models/user');
const Cart = require('../models/cart');
const Product = require('../models/product');
const CartProductList = require('../models/cart-product-list');
const { createCartByUserId, createProductItem, findCartByUserId, findCartItemByCartIdAndProductId } = require('../services/cart-service')

exports.getUserCart = async (req, res, next) => {
  // @TODO: UserID

  let cartItems = await Cart.findOne({
    include: [Product]
  })
  res.send(cartItems)
};

exports.updateCart = async (req, res, next) => {
  // @TODO: UserID
  let userId = 1;
  let { productId, quantity = 1 } = req.body;
  // @TODO: Check for productId

  let cart = await findCartByUserId(userId);
  if (null == cart) {
    cart = await createCartByUserId(userId)
  }
  let cartData = cart.get();
  let cartId = cartData.id

  let item = await findCartItemByCartIdAndProductId(cartId, productId);
  if (null !== item) {
    await item.update({
      'quantity': quantity
    })
  } else {
    item = await createProductItem(cartId, productId)
  }
  res.send(item)
};

exports.deleteProductFromCart = async (req, res, next) => {
  // @TODO: UserID
  let userId = 1;
  let { productId } = req.params;
  let cart = await findCartByUserId(userId);
  if (cart !== null) {
    let cartData = cart.get();
    let cartId = cartData.id
    try {
      let resp = await CartProductList.destroy({
        where: {
          productId,
          cartId    
        }
      });
      res.send({
        message: "OK"
      })
    } catch (error) {
      console.log(error)
    }
  } else {
    res.status = 404;
    res.send({
      message: "Not Found"
    })
  }
};

