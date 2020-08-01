const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const COMMENTS = sequelize.define('product_review', {
  product_review_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  product_id: {
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
  number_of_likes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  number_of_dislikes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
},
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = COMMENTS;
