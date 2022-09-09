const express = require("express");
const router = express.Router();

router.route("/sign-in")
    .get(function(req,res){
        res.send(__dirname+"../../views/signin.html")
    })
    .post()