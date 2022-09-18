const express = require("express");
const router = express.Router();
const path = require("path");
const auth = require("./auth.routes")
const queue = require("../controllers/queue.controller");

router.route("/")
.get(function(req,res){
    auth.isLoggedIn(req,res,function(){
        queue.findBusinessOne("b_Id",req.user.id).then(result=>{
            console.log(result);
            if(result){
                
                res.render("businessDashboard",{
                    username: req.user.username,
                    queueData:result
        
                })
            }else{
                console.log("in the else");
                res.render("businessDashboard",{
                    username: req.user.username,
                    queueData:null
        
                })
            }
        }).catch(err=>{
            console.log(err);
              res.status(500).send({
                message:
                  err.message || "Some error occurred while quering findOne email.",
              });
             reject(false);
        })
        
    })
})


 router.route("/profile")
    .get(function(req,res){
        console.log(req.user);
        auth.isLoggedIn(req,res,function(){
            console.log("isslogged called");
            res.render("business.profile.ejs")
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

    router.route("/profile/edit")
    .get(function(req,res){
        console.log(req.user);        
        auth.isLoggedIn(req,res,function(){
            res.render("business.profile.edit.ejs")
        })
        // res.render(path.resolve("views/userDashboard"))
    })
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

    router.route("/OpenQueue")
    .get(function(req,res){
        console.log(req.user);
        auth.isLoggedIn(req,res,function(){
            console.log("create queue");
            res.render("business.OpenQueue.ejs")
            // res.render("index")
    })
})

module.exports = router;