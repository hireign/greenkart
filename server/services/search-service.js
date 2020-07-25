const Product = require('../models/product');

async function findAllProducts() {
    let allProucts =  await Product.find();
    return allProucts;
}

module.exports = {
    findAllProducts
}