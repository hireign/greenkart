const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.findAll()
};
