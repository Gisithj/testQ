const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller")

router.route("/")
    .get(function(req,res){
        res.render("admin.signin.ejs")
    })
    .post(function(req,res){
        console.log("admin");
        // user.create(req,res);
    })
;





module.exports = router;