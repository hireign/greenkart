const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../util/database');
const Order = require('./order')
const Product = require('./product');

class OrderDetails extends Model {}

OrderDetails.init({
    id: {
        field: 'order_detail_id',
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    productId: {
        field: 'product_id',
        type: Sequelize.INTEGER,
        allowNull: false
    },
    orderId: {
        field: 'order_id',
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    sellingPrice: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        field: 'selling_price'
    }
}, {sequelize, tableName: 'order_detail', timestamps: false})

Order.belongsToMany(Product, {
    through: {
      model: OrderDetails
    },
    foreignKey: 'orderId'
})

Product.belongsToMany(Order, {
    through: {
      model: OrderDetails
    },
    foreignKey: 'productId'
})

module.exports = OrderDetails