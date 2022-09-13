const express = require("express");
const router = express.Router();
const path = require("path");

router.route("/")
    .get(function(req,res){
        res.render(path.resolve("views/signup"))
    });
    // .post(function(req,res){
    //     res.redirect("/sign-in")
    //     const fName = req.body.fName;
    //     const lName = req.body.lName;
    //     const email = req.body.email;
    //     const nicNo = req.body.nic;
    //     const address = req.body.address;
    //     const zipCode = req.body.zipCode;
    //     const telNo = req.body.telNo;
    //     const username = req.body.username;
    //     const password = req.body.password;

    // console.log(fName,lName,email,nicNo,address,zipCode,telNo,username,password);
    // })



module.exports = router;