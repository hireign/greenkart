/**
 * @author Mihir Patel
 * 
 * Routes for REST APIs.
 */
const express = require("express");

const faqController = require("../controllers/faqController");
// const adminFaqController = require("../controllers/adminFaqController");

const router = express.Router();

// router.post("/contact/submitfaq", adminFaqController.addFaq);
router.get("/contact", faqController.getFaqs);


module.exports = router;
