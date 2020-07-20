const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = require('../util/database');

class Order extends Model {}

Order.init({
  id: {
    allowNull: false,
    type: Sequelize.INTEGER,
    field: 'order_id',
    autoIncrement: true,
    primaryKey: true
  }, 
  deliveryStatus: {
    type: Sequelize.STRING,
    field: 'delivery_status'
  },
  addressId: {
    type: Sequelize.INTEGER,
    field: 'address_id'
  },
  userId: {
    type: Sequelize.INTEGER,
    field: 'user_id'
  }
}, {
  sequelize, modelName: 'orders', timestamps: false,
})

module.exports = Order;
