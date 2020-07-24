const Product = require('../models/product');

async function productDetails(req, res, next) {
    let x = await Product.findByPk(req.query.id)
    x = x == null? "incorrect product id": x;
    res.send(x);
};

async function similarProducts(req, res, next) {
    // get TOP products of same category, top is defined by most ordered
    
    let x = await Product.findAll({ 
        where: {
            category: req.query.category
        },
        limit: 4,
        order: [
            ['salePrice', 'DESC']
        ]
    })
    x = x == null? []: x;
    res.send(x);
};

module.exports = {
    productDetails,
    similarProducts
}