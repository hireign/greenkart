/**
 * Sequelize Model for product table interaction 
 *
 * @author [Shubham Suri](https://github.com/ssuri013)
 */
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = require('../util/database');

class Product extends Model {}
// Model based on product table
Product.init({
  productId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    field: 'product_id'
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: "default"
  },
  salePrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
    field: 'sale_price'
  },
  actualPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
    field: 'actual_price'
  },
  sellerId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'seller_id'
  }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
  })

module.exports = Product;
