/**
 * Controller for product related REST API calls
 *
 * @author [Shubham Suri](https://github.com/ssuri013)
 */
const Product = require('../models/product-details');
const sequelize = require('sequelize');
const Reviews = require("../models/reviews");

/**
 * Fetch details for a particular product using product_id
 *
 * @param {integer} id
 * @returns {Product || string} product - product information 
 */
async function productDetails(req, res) {
    //get product information by Primary Key
    let productInfo = await Product.findByPk(req.query.id)
    let x = await Reviews.findAll({
            where: {
                product_id: req.query.id
            }
        }).then(data => {
            return data
        })
    console.log(x)
    res.send(productInfo || "incorrect");
};

/**
 * Get TOP products of same category
 *
 * @param {integer} id
 * @returns {Array of Product} products - array of product 
 */
async function similarProducts(req, res) {
    //get information of product using ID
    let productInfo = await Product.findByPk(req.query.id)
    // use product information to find similar products
    let productList = await Product.findAll({ 
        where: {
            category: productInfo.category,
            productID: {
                [sequelize.Op.not]: productInfo.productId
            }
        },
        limit: 4,
        order: [
            ['salePrice', 'DESC']
        ]
    })
    productList = productList || [];
    res.send(productsList);
};

module.exports = {
    productDetails,
    similarProducts
}