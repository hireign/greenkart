/**
 * Controller for search related REST API calls
 *
 * @author [Hiren Khant](hr266981@dal.ca)
 */
const Product = require("../models/product");
const Comment = require("../models/comments");
const { Sequelize, Model, DataTypes } = require("sequelize");

async function getAllProducts(req, res, next) {
  try {
    let products = await Product.findAll();
    res.send(products);
  } catch (error) {
    next(error);
  }
}

async function searchProduct(req, res, next) {
  const queryterm = req.params.queryterm;
  const Op = Sequelize.Op;
  try { 
    129
    Product.hasOne(Comment, {foreignKey: 'product_id'})
    Comment.belongsTo(Product, {foreignKey: 'product_id'})
    let products = await Product.findAll({
      where: {
        [Op.or]: [
          {
            title: {
              [Op.like]: `${queryterm}%`,
            },
          },
          {
            title: {
              [Op.like]: `%${" " + queryterm}%`,
            },
          },
          {
            category: queryterm
          },
        ],
      },
      include: [{ model: Comment, attributes: ['rating'] }]
    });
    res.send(products);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllProducts,
  searchProduct,
};
