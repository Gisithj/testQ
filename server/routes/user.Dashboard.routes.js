const express = require("express");
const router = express.Router();
const path = require("path");
const auth = require("./auth.routes");
const { route } = require("./user.sign-in.routes");


router.route("/")
.get(function(req,res){
    auth.isLoggedIn(req,res,function(){
        res.render("user.myqueue.ejs",{
            username:req.user.username
        })
    })
})
router.route("/findQueues")
.get(function(req,res){
    auth.isLoggedIn(req,res,function(){
        res.render("user.findqueues.ejs",{
            username:req.user.username
        })
    })
})
router.route("/profile")
.get(function(req,res){
    auth.isLoggedIn(req,res,function(){
        res.render("user.profile.ejs",{
            username:req.user.username
        })
    })
})
router.route("/settings")
.get(function(req,res){
    auth.isLoggedIn(req,res,function(){
        res.render("user.settings.ejs",{
            username:req.user.username
        })
    })
})
router.route("/sign-out")
    .post( function(req, res, next){
        console.log("here");
        req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/sign-in');
        });
    });
module.exports = router;