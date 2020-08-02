const express = require('express');
const commentsController = require('../controllers/reviews');

const router = express.Router();

router.post('/review', commentsController.createReview);

router.put('/review', commentsController.modifyReview);

router.get('/review', commentsController.getAllReviews);

module.exports = router;
