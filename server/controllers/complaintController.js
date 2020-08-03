/**
 * @author Mihir Patel
 */
const Sequelize = require("sequelize");
const Complaint = require("../models/Complaint");

const sequelize = require("../util/database");

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

  //res.send("hii this is submit contact from api");
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

exports.removeContact = (req, res, next) => {
  //console.log("hiii this is for deletion");
  //console.log("id:" + req.params.id);
  //res.send("This is for deletion");

  //res.send("id" + req.params.complaint_id);
  Complaint.destroy({
    where: {
      complaint_id: req.params.id,
    },
  })
    .then(() => res.send("Successflly deleted record"))
    .catch((err) => console.log(err));
};
exports.deleteProductFromCart = async (req, res, next) => {
  let { complaint_id } = req.params;
  let cart = await findCartByUserId(userId);
  if (cart !== null) {
    let cartData = cart.get();
    let cartId = cartData.id;
    try {
      let resp = await CartProductList.destroy({
        where: {
          complaint_id,
        },
      });
      res.send({
        message: "OK",
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status = 404;
    res.send({
      message: "Not Found",
    });
  }
};
