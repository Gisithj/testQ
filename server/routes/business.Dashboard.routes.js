const express = require("express");
const router = express.Router();
const path = require("path");
const auth = require("./auth.routes")
const queue = require("../controllers/queue.controller");

router.route("/")
.get(function(req,res){
    auth.isLoggedIn(req,res,function(){
        queue.findOne("userr_Id",req.user.id).then(result=>{
            if(result!=0 && result!=null){
                res.render("userDashboard",{
                    username: req.user.username,
                    queueData:result
        
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
module.exports = router;