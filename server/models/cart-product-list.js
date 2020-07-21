const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = require('../util/database');
const Cart = require('./cart');
const Product = require('./product')

class CartProductList extends Model { }

CartProductList.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    field: 'cart_product_id',
    autoIncrement: true
  },
  cartId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'cart_id'
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'product_id'
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'quantity'
  }
}, {
  sequelize,
  tableName: 'cart_product_lists',
  timestamps: false
})

Cart.belongsToMany(Product, {
  through: CartProductList,
  foreignKey: 'cartId'
})

Product.belongsToMany(Cart, {
  through: CartProductList,
  foreignKey: 'productId'
})


module.exports = CartProductList;
