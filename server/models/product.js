const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = require('../util/database');

class Product extends Model {}

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

// insert into product (title, category, description, sale_price, actual_price, seller_id) 
// values ("product1", "plants", "abcdef", 23.34, 25.00, 1);

// insert into product (title, category, description, sale_price, actual_price, seller_id) 
// values ("product2", "plants", "abcdef", 23.34, 27.00, 1);