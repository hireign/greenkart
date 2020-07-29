/**
 * @author Mihir Patel
 */

const Complaint = require("../models/Complaint");

exports.submitContactForm = (req, res, next) => {
 
  Complaint.create({
    name: req.body.name,
    email_id: req.body.email_id,
    contact_no: req.body.contact_no,
    message: req.body.message,
    state: req.body.state,
  })
    .then(res.status(200).send(true))
    .catch((err) => console.log(err));
};

exports.getContacts = (req, res, next) => {
  Complaint.findAll()
    .then((complaints) => {
      if (complaints) {
        res.json(complaints);
      }
    })
    .catch((err) => console.log(err));
};
