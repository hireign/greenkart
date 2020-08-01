const COMMENTS = require('../models/comments');
const Sequelize = require('sequelize');

async function getAllComments(req, res, next) {
    let x = await COMMENTS.findAll({
        where: {
            product_id: req.query.id
        }
    })
    res.send(x);
};

async function modifyComment(req, res, next) {
    let query = req.body.type == "increase" ? 
        { number_of_likes: Sequelize.literal('number_of_likes + 1') }:
        { number_of_dislikes: Sequelize.literal('number_of_dislikes + 1') } 
    let changes = await COMMENTS.update(
        query,
        { where: { product_review_id: req.body.commentID } });
        res.send(changes)
};

async function createComment(req, res, next) {
    const commentResponse = COMMENTS.create({
        product_id: req.body.productID,
        rating: req.body.rating,
        comment: req.body.comment,
        user_id: req.body.userID
    });
    res.send(commentResponse)
};

module.exports = {
    getAllComments,
    createComment,
    modifyComment
}