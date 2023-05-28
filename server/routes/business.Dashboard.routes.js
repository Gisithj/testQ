const express = require("express");
const router = express.Router();
const path = require("path");
const auth = require("./auth.routes")
const queue = require("../controllers/queue.controller");
const business = require("../controllers/business.controller")

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

router.route("/sign-out")
    .post( function(req, res, next){
        console.log("here");
        req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/sign-in');
        });
    });


 router.route("/profile")
 .get(function(req,res){
    console.log(req.user);
    console.log(req.user.id);
    auth.isLoggedIn(req,res,function(){
        business.findOne("b_id",req.user.id).then(result=>{
            console.log("hererere");
            
            if(result){
                console.log("profile load ",result);
                res.render("business.profile.ejs",{
                    username:req.user.username,
                    queueData:result
                })
            }else{
                console.log("in the else");
                res.render("business.profile.ejs",{
                    username: req.user.username,
                    queueData:null            
                })
            }
        }).catch(err=>{
            console.log(err);
              res.status(500).send({
                message:
                  err.message || "Some error occurred while quering businessfindOne email.",
              });
             reject(false);
        })
    })})




    router.route("/profile/edit")
    .get(function(req,res){
        console.log(req.user);
        auth.isLoggedIn(req,res,function(){
            business.findOne("b_Id",req.user.id).then(result=>{
                console.log("profile business",result);
                if(result!=0 && result!=null){
                    res.render("business.profile.edit.ejs",{
                        username:req.user.username,
                        queueData:result
                    })
                }else{
                    console.log("in the else");
                    res.render("business.profile.edit.ejs",{
                        username: req.user.username,
                        queueData:null            
                    })
                }
            }).catch(err=>{
                console.log(err);
                  res.status(500).send({
                    message:
                      err.message || "Some error occurred while quering business findOne email.",
                  });
                 reject(false);
            })
        })
        // res.render("user.profile.edit.ejs")
        // res.render(path.resolve("views/userDashboard"))
    })
    .post(function(req,res){
        console.log("Ez bng");
        auth.isLoggedIn(req,res,function(){

            auth.isLoggedIn(req,res,function(){
                console.log("data from form");
                business.businessUpdate(req,res).then(result=>{
                    if(result){
                        res.redirect("/businessDashboard/profile")
                    }else{
                        res.render("business.profile.edit.ejs",{
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
           
            // res.render("user.settings.ejs",{
            //     username:req.user.username
            // })
        })
    })

   
    router.route("/createQueue")
    .get(function(req,res){
        console.log(req.user,"crete queue");
        auth.isLoggedIn(req,res,function(){
            console.log("create queue");
            res.render("business.CreateQueue.ejs",{
                username:req.user.username
            })
            // res.render("index")
        })
        // res.render(path.resolve("views/userDashboard"))
    })

    .post(function(req,res){
        console.log(req.user,"crete queue");
        auth.isLoggedIn(req,res,function(){
            queue.create(req,res)
            // console.log("create queue");
            // res.render("business.CreateQueue.ejs",{
            //     username:req.user.username
            // })
            // res.render("index")
        })
        // res.render(path.resolve("views/userDashboard"))
    })

    router.route("/OpenQueue")
    .get(function(req,res){
        console.log(req.user);
        auth.isLoggedIn(req,res,function(){
            console.log("create queue");
            res.render("business.OpenQueue.ejs",{
                username:req.user.username
            })
            // res.render("index")
    })
})

router.route("/queueDelete")
.post( function(req, res, next){
    auth.isLoggedIn(req,res,function(){

        var q_id = req.body.q_Id

        console.log("in the queue delete",q_id);
        queue.queueDelete(q_id,res,res).then(result=>{
            if(result){
                res.redirect("/businessDashboard")
            }else{
                console.log("queue did not deleted");
            }
        }).catch(err=>{
            console.log(err);
              res.status(500).send({
                message:
                  err.message || "Some error occurred while quering findOne email.",
              });
        })
    })
});

module.exports = router;