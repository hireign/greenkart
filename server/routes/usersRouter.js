const express = require('express');

const userController = require('../controllers/usersController');

const router = express.Router();

router.get('/users', userController.getAllUsers);

router.get("/users/:username", userController.getUserByUsername);

router.post('/users', userController.createUserRequest);

router.put('/users/:username', userController.updateUserRequest);

exports.routes = router;
