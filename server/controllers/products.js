/**
 * Controller for product related REST API calls
 *
 * @author [Shubham Suri](https://github.com/ssuri013)
 */
const Product = require('../models/product');
const sequelize = require('sequelize')

/**
 * Fetch details for a particular product using product_id
 *
 * @param {integer} id
 * @returns {Product || string} product - product information 
 */
async function productDetails(req, res) {
    //get product information by Primary Key
    let productInfo = await Product.findByPk(req.query.id)
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
    let productsList = await Product.findAll({ 
        where: {
            category: productInfo.category,
            productId: {
                [sequelize.Op.not]: productInfo.productId
            }
        },
        limit: 4,
        order: [
            ['salePrice', 'DESC']
        ]
    })
    productsList = productsList || [];
    res.send(productsList);
};

module.exports = {
    productDetails,
    similarProducts
}