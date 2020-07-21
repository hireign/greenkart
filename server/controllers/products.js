const Product = require('../models/product');
const utils = require("../util/cleanData");
// const Sequelize = require('sequelize');

async function productDetails(req, res, next) {
    let x = await Product.findByPk(req.query.id)
    x = x == null? "wrong id": utils.parseSQLResponse(x);
    res.send(x);
};

async function similarProducts(req, res, next) {
    // get TOP products of same category, top is defined by most ordered
    
    // COMMENTS.update(
    //     { number_of_likes: Sequelize.literal('number_of_likes + 1') },
    //     { where: { product_review_id: req.query.id } });
    res.send("done")
};

module.exports = {
    productDetails,
    similarProducts
}