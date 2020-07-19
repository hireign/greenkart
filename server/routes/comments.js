const express = require('express');
const commentsController = require('../controllers/comments');

const router = express.Router();

router.post('/review', commentsController.createComment);

router.put('/review', commentsController.modifyComment);

router.get('/review', commentsController.getAllComments);

module.exports = router;
