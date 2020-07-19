const COMMENTS = require('../models/comments');
const utils = require("../util/cleanData");
const Sequelize = require('sequelize');

async function getAllComments(req, res, next) {
    let x = await COMMENTS.findAll({
        where: {
            product_id: req.query.id
        }
    })
    x = utils.parseSQLResponse(x);
    res.send(x);
};

async function modifyComment(req, res, next) {
    COMMENTS.update(
        { number_of_likes: Sequelize.literal('number_of_likes + 1') },
        { where: { product_review_id: req.query.id } });
    res.send("done")
};

async function createComment(req, res, next) {
    const x = COMMENTS.create({
        rating: req.query.rating, comment: req.query.comment,
        product_id: req.query.product_id
    });
    res.send(x)
};

module.exports = {
    getAllComments,
    createComment,
    modifyComment
}