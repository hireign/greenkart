const Sequelize = require('sequelize');

const sequelize = require('../util/database');
/**
 * Sequelize Model for User table  
 *
 * @author [Jatin Partap Rana]
 */
const User = sequelize.define('users', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  is_seller: Sequelize.BOOLEAN,
  
},
{
  timestamps: false,
  freezeTableName: true,
});

module.exports = User;
