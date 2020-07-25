const Product = require("../models/product");
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
        ],
      },
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
