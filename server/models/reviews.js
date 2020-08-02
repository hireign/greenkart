/**
 * Sequelize Model for product_review table interaction 
 *
 * @author [Shubham Suri](https://github.com/ssuri013)
 */

const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Reviews = sequelize.define('product_review', {
  id: {
    field: 'product_review_id',
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  productID: {
    field: 'product_id',
    type: Sequelize.STRING,
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: false
  },
  numberOfLikes: {
    field: 'number_of_likes',
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  numberOfDislikes: {
    field: 'number_of_dislikes',
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  userID: {
    field: 'user_id',
    type: Sequelize.INTEGER,
    allowNull: false,
    references: "user",
    referncesKey: 'user_id'
  }
},
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Reviews;
