/**
 * Controller for reviews related REST API calls
 *
 * @author [Shubham Suri](https://github.com/ssuri013)
 */

 const Reviews = require('../models/reviews');
const Sequelize = require('sequelize');
// const User = require("../models/user");

async function getAllReviews(req, res, next) {
    let queryResponse = await Reviews.findAll({
        // include: [User],
        where: {
            productID: req.query.id
        },
        order: [
            ['numberOfLikes', 'ASC']
        ]
    })
    res.send(queryResponse);
};

async function modifyReview(req, res, next) {
    console.log(req.body)
    let query = req.body.type == "increase" ? 
        { numberOfLikes: Sequelize.literal('number_of_likes + 1') }:
        { numberOfDislikes: Sequelize.literal('numberOfDislikes + 1') } 
    let changes = await Reviews.update(
        query,
        { 
            where: { 
                id: req.body.reviewID
        } 
    });
    res.send(changes)
};

async function createReview(req, res, next) {
    const response = Reviews.create({
        productID: req.body.productID,
        rating: req.body.rating,
        comment: req.body.comment,
        userID: req.body.userID
    });
    res.send(response)
};

module.exports = {
    getAllReviews,
    createReview,
    modifyReview
}