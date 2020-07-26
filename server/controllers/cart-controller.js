const User = require('../models/user');
const Cart = require('../models/cart');
const Product = require('../models/product');
const CartProductList = require('../models/cart-product-list');
const { createCartByUserId, createProductItem, findCartByUserId, findCartItemByCartIdAndProductId } = require('../services/cart-service')

/**
 * @author Aman Vishnani
 * 
 * Controller for REST APIs.
 * Check cartRoute for more details
 */

 /**
  * Returns User's cart details
  *  
  */
exports.getUserCart = async (req, res, next) => {
  // @TODO: Requires Auth Middleware (User Module Dependency)
  let userId = req.session.user.user_id;
  let cartItems = await Cart.findOne({
    include: [Product],
    where: {
      userId
    }
  })
  if(cartItems == null) {
    cartItems = await createCartByUserId(userId)
  }
  res.send(cartItems)
};

/**
 * Sets the quantity of items for given product in user's cart
 * 
 * @param productId as Body Param 
 * @param  quantity as Body Param 
 */
exports.updateCart = async (req, res, next) => {
  // @TODO: Requires Auth Middleware (User Module Dependency)
  let userId = req.session.user.user_id;
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

/**
 * Remove product from User's cart
 * 
 * @param productId as body param.
 */
exports.deleteProductFromCart = async (req, res, next) => {
  // @TODO: Requires Auth Middleware (User Module Dependency)
  let userId = req.session.user.user_id;
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

