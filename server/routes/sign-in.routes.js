const express = require("express");
const router = express.Router();
const path = require("path");
const user = require("../controllers/login.controller")

router.route("/")
    .get(function(req,res){
        res.render("signin");
    })
    .post(function(req,res){
        user.login(req,res)
    })
;

module.exports = router;