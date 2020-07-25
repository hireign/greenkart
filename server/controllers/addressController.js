const Address = require('../models/address');
const Sequelize = require('sequelize');
const session = require('express-session') ;
const { Op } = require("sequelize");
const sequelize = require('../util/database');
const { QueryTypes } = require('sequelize');
/**
 * @author [Jatin Partap Rana]
 * This API get the user from the session and then gets
 * the user address details from the database address table.
 */
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

/**
 * @author [Jatin Partap Rana]
 * This API takes the address id from the body and 
 * then updates the address name, mobile and street name according to the vales
 * passes in body.
 */
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
  
/**
 * @author [Jatin Partap Rana]
 *This API deletes the address from the database address table.
 */
  exports.deleteAddress = (req, res, next) => {
    const addressId = req.body.id;
    Address.destroy({
      where: {
        id: addressId
      }}).then(res.status(200).send("Address deleted")).catch(res.status(200).send("Address not found"));
  };
