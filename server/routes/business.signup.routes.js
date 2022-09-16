const express = require("express");
const router = express.Router();
const busines = require("../controllers/business.controller")

router.route("/")
    .get(function(req,res){
        res.render("business.signup.ejs")
    })
    .post(function(req,res){
        busines.create(req,res);
    })
;

module.exports = router;