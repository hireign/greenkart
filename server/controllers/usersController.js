const User = require('../models/user');
var mongoose = require('mongoose');
const Joi = require("joi");

exports.getAllUsers = async (req, res, next) => {
  let users = await User.find().exec()
  res.status(200)
  .json(users)
};

exports.getUserByUsername = async (req, res, next) => {
  res.status(200)
  .json(await User.findOne({
    "username": req.params.username
  }).exec())
};

exports.createUserRequest = (req, res, next) => {
  const schema = {
    username: Joi.required(),
    email: Joi.required()
    };
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(400).send(result.error.details[0].message);
      }
  let {email, username} = req.body;
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    username: username,
    email: email
  });
  user.save().then(result => {
    res.status(201)
  .json({
    message:"User Created",
    createdUser: result
  })
  }).catch(err => res.status(500).json({error: err}));
};

exports.updateUserRequest = (req, res, next) => {
  const schema = {
    username: Joi.required()
    };
    const result = Joi.validate(req.body, schema);
    if (result.error) {
    return res.status(400).send(result.error.details[0].message);
    }
  let userNameInParams = req.params.username;
  let {username} = req.body;
  User.updateOne({username: userNameInParams},  { $set: {username: username} })
  .exec().then(result =>{
    res.status(200)
  .json({
    message:"User Updated"
  })
  }).catch(err =>{
    res.status(500).json({error: err})
  })
};


