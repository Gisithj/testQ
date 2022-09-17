const express = require("express");
const router = express.Router();
const path = require("path");
const auth = require("./auth.routes")

router.route("/")
    .get(function(req,res){
        console.log(req.user);
        auth.isLoggedIn(req,res,function(){
            console.log("isslogged called");
            res.render("businessDashboard")
        })
        // res.render(path.resolve("views/userDashboard"))
    })
router.route("/sign-out")
    .post( function(req, res, next){
        console.log("here");
        req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/sign-in');
        });
    });

    router.route("/createQueue")
    .get(function(req,res){
        console.log(req.user);
        auth.isLoggedIn(req,res,function(){
            console.log("create queue");
            res.render("business.CreateQueue.ejs")
            // res.render("index")
        })
        // res.render(path.resolve("views/userDashboard"))
    })

    
module.exports = router;