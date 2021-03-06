const express = require("express");
const router = express.Router();

const adminCntrlr = require("../controllers/adminCntrlr");

// Routes for Admin
router.post("/login",adminCntrlr.login)
router.post("/create", adminCntrlr.create);
router.delete("/delete/:id",adminCntrlr.deleteOne
);

module.exports = router;
