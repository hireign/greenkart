const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();
/**
 * @author [Jatin Partap Rana]
 * This is route file for user management route
 */
router.post('/login', userController.loginUser);
router.post('/createAccount', userController.registerAccount);
router.post('/forgotpassward', userController.forgotPassword);
router.post('/logout', userController.logout);
router.get('/checkUser', userController.checkUserLogin);

module.exports = router;
