const User = require('../models/user');
const Sequelize = require('sequelize');
const session = require('express-session') ;
const { Op } = require("sequelize");
const sequelize = require('../util/database');
const { QueryTypes } = require('sequelize');
const nodemailer= require('nodemailer');
const sendGrid= require('nodemailer-sendgrid-transport');

const sendMail = nodemailer.createTransport(sendGrid({
  auth:{
    api_key: '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'
  }
}));

exports.loginUser = (req, res, next) => {
  const userName = req.body.email.toString();
 
  User.findOne({
    where: {
      [Op.or]: [
        { username: userName },
        { email: userName }
      ],
      [Op.and]: [
        { password: req.body.password }
      ]
    }
  }).then( user=>{
    if (!user) {
      return res.status(200).send("User With Given Email is not found");
    }
      req.session.userSignIn = true;
      req.session.user = user;
      req.session.save(err => {
          res.status(200).send(req.session.userSignIn);
      })
  }).catch(err => console.log(err));;
};

exports.registerAccount = (req, res, next) => {
  const email = req.body.email;
  const userName = req.body.userName;
  const password = req.body.password;
 User.findOne({
     where: {
      [Op.or]: [
        { username: userName },
        { email: email }
      ]
     }}).then(user=>{
       if (user) {
         return res.status(200).send("User already exists with given email Id");
       }
       User.create({ username: userName, password: password, email: email, is_seller: 0 }).then(
          res.status(200).send(true)
       )
   .catch(err => console.log(err));
  })};

  exports.forgotPassword = (req, res, next) => {
    const email = req.body.email;
    sequelize.query("select * from users where email = ?", { replacements: [email], type: QueryTypes.SELECT }).then(
      user=>{
        if (!user) {
          return res.status(200).send("User With Given Email is not found");
        }
        sendMail.sendMail({
          to: email,
          from: 'jatin.rana.partap@gmail.com',
          subject: 'GreenKart User Password',
          html: `<h3>Your password for GreenKart User Account is: ${user[0].password}</h3>`
        });
        res.status(200).send("Password Send On your email address");
      }
    )
  
  };

  exports.logout = (req, res, next) => {
    
    req.session.destroy(err => {
      res.status(200).send("Session ended");
    });
  };
