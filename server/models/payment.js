const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Payment = sequelize.define('payments', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    field: 'payment_id'
  },
  orderId: {
    type: Sequelize.INTEGER,
    field: 'order_id',
    allowNull: false
  },
  userId:  {
    type: Sequelize.INTEGER,
    field: 'user_id',
  },
  cardNumber:  {
    type: Sequelize.STRING,
    field: 'card_number',
  },
  paymentDate:  {
    type: Sequelize.DATE,
    field: 'payment_date',
  },
  paymentAmount:  {
    type: Sequelize.INTEGER,
    field: 'payment_amount',
  }
}, {
  timestamps: false,
  freezeTableName: true,
});

module.exports = Payment;
