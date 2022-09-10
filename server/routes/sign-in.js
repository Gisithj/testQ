const express = require("express");
const router = express.Router();
const path = require("path");

router.route("/")
    .get(function(req,res){
        res.sendFile(path.resolve("views/signin.html"))
    })
    .post(function(req,res){
        console.log(req.body);
    })
;

module.exports = router;