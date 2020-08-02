const Product = require('../models/product-details');

exports.getProducts = (req, res, next) => {
  Product.findAll()
};
