const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller")

router.route("/")
    .get(function(req,res){
        res.render("user.signup.ejs")
    })
    .post(function(req,res){
        user.create(req,res);
    })
;

module.exports = router;