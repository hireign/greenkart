const COMMENTS = require('../models/comments');
const Sequelize = require('sequelize');
const User = require("../models/user");

async function getAllComments(req, res, next) {
    let x = await COMMENTS.findAll({
        where: {
            product_id: req.query.id
        },
        include: [User]
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

/**
 * Controller to fetch ratings based on product id
 *
 * @author [Hiren Khant](hr266981@dal.ca)
 */
async function getRatingByProductID(req, res, next) {
    try {
      let comment = await COMMENTS.findOne({
        where: {
            product_id: +req.params.id
        }
      });
      res.send(comment);
    } catch (error) {
      next(error);
    }
  }


module.exports = {
    getAllComments,
    createComment,
    modifyComment,
    getRatingByProductID
}