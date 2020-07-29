/**
 * @author Mihir Patel
 */
const Faq = require("../models/faq");

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
