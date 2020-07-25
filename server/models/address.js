const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = require('../util/database');
/**
 * Sequelize Model for Address table  
 *
 * @author [Jatin Partap Rana]
 */
class Address extends Model {}

Address.init({
  id: {
   type: Sequelize.INTEGER,
    primaryKey: true,
    field: 'id',
  }, 
  name: {
    type: Sequelize.STRING,
    field: 'name'
  },
  mobile: {
    type: Sequelize.STRING,
    field: 'mobile'
  },
  street: {
    type: Sequelize.INTEGER,
    field: 'street'
  },
   user_id: {
    type: Sequelize.INTEGER,
    field: 'user_id'
  }
}, {
  sequelize, modelName: 'address',   timestamps: false,
  freezeTableName: true,
})

module.exports = Address;