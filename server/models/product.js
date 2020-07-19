const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const PRODUCTS = sequelize.define('product', {
  product_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
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
  sale_price: {
    type: Sequelize.FLOAT,
    allowNull: false  
  },
  actual_price: {
    type: Sequelize.FLOAT,
    allowNull: false  
  },
  seller_id: {
    type: Sequelize.INTEGER,
    allowNull: false  
  }
},
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = PRODUCTS;
