/**
 * @author Mihir Patel
 * 
 * Routes for REST APIs.
 * Ideally Controller and Routes should be in one files.
 */

const express = require("express");

const complaintController = require("../controllers/complaintController");

const router = express.Router();

router.post("/contact/submitform", complaintController.submitContactForm);

router.get("/getContacts", complaintController.getContacts);

module.exports = router;
