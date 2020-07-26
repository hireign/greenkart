const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = require('../util/database');
class Cart extends Model {}

/**
 * @author Aman Vishnani
 */

Cart.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    field: 'cart_id',
    autoIncrement: true
  },
  userId: {
    type: Sequelize.INTEGER,
    field: 'user_id',
    allowNull: false
  },
  createdOn:  {
    type: Sequelize.DATE,
    field: 'created_on',
  },
}, {
  sequelize,
  tableName: 'carts',
  freezeTableName: false,
  timestamps: false
});

module.exports = Cart;
