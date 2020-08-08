const express = require('express');
const commentsController = require('../controllers/comments');

const router = express.Router();

router.post('/review', commentsController.createComment);

router.put('/review', commentsController.modifyComment);

router.get('/review', commentsController.getAllComments);

/**
 * Route to fetch ratings based on product id
 *
 * @author [Hiren Khant](hr266981@dal.ca)
 */
router.get('/productrating/:id', commentsController.getRatingByProductID);

module.exports = router;
