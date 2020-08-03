/**
 * @author Mihir Patel
 */
const Sequelize = require("sequelize");
const Faq = require("../models/Faq");

const sequelize = require("../util/database");

exports.getFaqs = (req, res, next) => {
  Faq.findAll()
    .then((faqs) => {
      if (faqs) {
        res.json(faqs);
      } else {
        res.send("Faqs not found");
      }
    })
    .catch((err) => console.log(err));
};
