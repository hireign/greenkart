const Address = require('../models/address');
const Sequelize = require('sequelize');
const session = require('express-session') ;
const { Op } = require("sequelize");
const sequelize = require('../util/database');
const { QueryTypes } = require('sequelize');

exports.getAddress = (req, res, next) => {
  const userId = req.session.user.user_id;
  sequelize.query("select * from address where user_id=?", { replacements: [userId], type: QueryTypes.SELECT }).then(
    address=>{
      if (!address) {
        return res.status(200).send("No address found");
      }
            res.status(200).send(address);
    })
  .catch(err => console.log(err));
};

exports.saveAndUpdateAdress = (req, res, next) => {
    const addressId = req.body.id;
    if(addressId){
        sequelize.query("select * from address where id=?", { replacements: [addressId], type: QueryTypes.SELECT }).then(
            address=>{
              if (!address) {
                return res.status(200).send("No address found");
              }else{
                address.name = req.body.name;
                address.mobile = req.body.mobile;
                address.street = req.body.street;
                Address.update({
                    name:req.body.name,
                    mobile: req.body.mobile,
                    street: req.body.street
                },  { where: { id: addressId } }).then( res.status(200).send(address))
              }
                   
            })
          .catch(err => console.log(err));
    }
    else{
        Address.create({ name: req.body.name, mobile:req.body.mobile, street:req.body.street, user_id:req.session.user.user_id }).then((address) => res.status(200).send(address));
    }
  };
  

  exports.logout = (req, res, next) => {
    
    req.session.destroy(err => {
      res.status(200).send("Session ended");
    });
  };
