const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/login', userController.loginUser);
router.post('/createAccount', userController.registerAccount);
router.post('/forgotpassward', userController.forgotPassword);
router.post('/logout', userController.logout);

module.exports = router;
