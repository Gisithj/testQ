const express = require("express");
const router = express.Router();
const path = require("path");
const user = require("../controllers/user.controller")

router.route("/")
    .post(function(req,res){
        user.create(req,res);
    })
;

module.exports = router;