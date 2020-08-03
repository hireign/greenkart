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
/**
 * @author [Jatin Partap Rana]
 * Login Api main method which takes username and password from body
 * and checks whether user already exits or not. If user exists
 * then this API sets the user object in the session.
 */
exports.loginUser = (req, res, next) => {
  const userName = req.body.email.toString();
 //Gets the user object from DB.
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
      return res.status(200).send("Invalid credentials");
    }
    //sets user object in the session.
      req.session.userSignIn = true;
      req.session.user = user;
      const userObj = {"userName":user.username, "loggedIn": true, "isAdmin": user.is_seller}
      req.session.save(err => {
        res.status(200).send({user: userObj});
      })
  }).catch(err => console.log(err));;
};

/**
 * @author [Jatin Partap Rana]
 * Register API to register a new user in the database. It also checks whether the user 
 * exists in the database or not.
 */
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

  /**
   * @author [Jatin Partap Rana]
   * Forgot password API: This API takes emailId from the user and checks whtether 
   * the emailId exists in DB or not. If it exists then it sends an email to the user.
   */
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
  /**
   * @author [Jatin Partap Rana]
   * This API checks whether the user is is already logged in.
   */
  exports.checkUserLogin = (req, res, next) => {
    if(req.session.user){
      const userObj = {"userName":req.session.user.username, "loggedIn": true}
      res.status(200).send(userObj);
    }
    else{
      const userObj = {"loggedIn": false}
      res.status(200).send(userObj);
    }
  };

  /**
   * @author [Jatin Partap Rana]
   * This API removes the user object from the session so that the user logs out from a session.
   */
  exports.logout = (req, res, next) => {
    
    req.session.destroy(err => {
      res.status(200).send("Session ended");
    });
  };