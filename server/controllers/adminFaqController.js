/**
 * @author Mihir Patel
 */
const Sequelize = require("sequelize");
const Faq = require("../models/faq");

const sequelize = require("../util/database");

exports.addFaq = (req, res, next) => {
  /*const email = req.body.email_id;
  const number = req.body.contact_no;
  const message = req.body.message;
  const country = req.body.country;

  console.log("email:" + email);
  console.log("number: " + number);
  console.log("message: " + message);
  console.log("country: " + country);*/

  Faq.create({
    question: req.body.question,
    answer: req.body.answer,
  })
    .then(res.status(200).send(true))
    .catch((err) => console.log(err));

  //res.send("hii this is submit contact from api");
};
