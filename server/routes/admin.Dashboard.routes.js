const express = require("express");
const router = express.Router();
const path = require("path");
const auth = require("./auth.routes");
const { route } = require("./admin.sign-in.routes");
const queue = require("../controllers/queue.controller")


router.route("/")
.get(function(req,res){
    console.log("admin dash 2");
    res.render("admin.business.ejs")
    // auth.isLoggedIn(req,res,function(){
    //     res.render("business.CreateQueue.ejs")
        // queue.findOne("userr_Id",req.user.id).then(result=>{
        //     if(result!=0 && result!=null){
        //         res.render("userDashboard",{
        //             username: req.user.username,
        //             queueData:result
        
        //         })
        //     }
        // }).catch(err=>{
        //     console.log(err);
        //       res.status(500).send({
        //         message:
        //           err.message || "Some error occurred while quering findOne email.",
        //       });
        //      reject(false);
        // })
        
    })
// })


router.route("/findQueues")
.get(function(req,res){
    auth.isLoggedIn(req,res,function(){
        queue.findAll("userr_Id",req.user.id).then(result=>{
            console.log(result,"here");
            if(result){
                res.render("user.findqueues.ejs",{
                    username: req.user.username,
                    queueData:result
        
                })
            }else{
                console.log("no queue");
                res.render("user.findqueues.ejs",{
                    username: req.user.username,
                    queueData:false
        
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
.post( function(req, res){
    auth.isLoggedIn(req,res,function(){
        var keyword =req.body.search;
        queue.findAllLike(keyword,req,res).then(result=>{
            if(result!=0 && result!=null){
                res.render("user.findqueues.ejs",{
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
});

router.route("/profile")
.get(function(req,res){
    auth.isLoggedIn(req,res,function(){
        res.render("admin.profile.ejs",{
            username:req.user.username
        })
    })
})
router.route("/users")
.get(function(req,res){
    auth.isLoggedIn(req,res,function(){
        res.render("admin.users.ejs",{
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

    router.route("/profile/edit")
    .get(function(req,res){
        console.log(req.user);
        auth.isLoggedIn(req,res,function(){
            res.render("user.profile.edit.ejs")
        })
        // res.render(path.resolve("views/userDashboard"))
    })
module.exports = router;