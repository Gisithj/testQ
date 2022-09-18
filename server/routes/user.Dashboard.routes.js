const express = require("express");
const router = express.Router();
const path = require("path");
const auth = require("./auth.routes");
const { route } = require("./user.sign-in.routes");
const queue = require("../controllers/queue.controller")
const user = require("../controllers/user.controller")
const userDashboard = require("../controllers/userDashboard.controller");


router.route("/")
.get(function(req,res){
    auth.isLoggedIn(req,res,function(){
        console.log("userr_Id",req.user.id);
        queue.findOne("userr_Id",req.user.id).then(result=>{
            if(result){
                res.render("userDashboard",{
                    username: req.user.username,
                    queueData:result
        
                })
            }else{
                console.log("in the else");
                res.render("userDashboard",{
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
    console.log(req.user);
    auth.isLoggedIn(req,res,function(){
        user.findOne("user_Id",req.user.id).then(result=>{
            console.log("hererere");
            console.log("profile load ",result);
            if(result!=0 && result!=null){
                res.render("user.profile.ejs",{
                    username:req.user.username,
                    queueData:result
                })
            }else{
                console.log("in the else");
                res.render("user.profile.ejs",{
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
    })})
// .get(function(req,res){
//     auth.isLoggedIn(req,res,function(){
            
//         // res.render("user.profile.ejs",{
//         //     username:req.user.username
//         // })
//     })
// })

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
            user.findOne("user_Id",req.user.id).then(result=>{
                console.log("profile gggggg",result);
                if(result!=0 && result!=null){
                    res.render("user.profile.edit.ejs",{
                        username:req.user.username,
                        queueData:result
                    })
                }else{
                    console.log("in the else");
                    res.render("user.profile.edit.ejs",{
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
        // res.render("user.profile.edit.ejs")
        // res.render(path.resolve("views/userDashboard"))
    })

    .post(function(req,res){
        auth.isLoggedIn(req,res,function(){
            var user ={
                user_id:req.user.id,
                email :req.body.email,
                address:req.body.address,
                zipCode:req.body.zipcode,
                telNo: req.body.telNo,
                password:req.body.password,
            }

            auth.isLoggedIn(req,res,function(){
                console.log(user,"data from form");
                userDashboard.userUpdate(user,req,res).then(result=>{
                    console.log("profileehhhh",result);
                    if(result){
                        res.redirect("/userDashboard/profile")
                    }else{
                        console.log("in the else");
                        res.render("user.profile.edit.ejs",{
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

    router.route("/tokenDelete")
    .post( function(req, res, next){
        auth.isLoggedIn(req,res,function(){
            var q_id = req.body.userTokenDelete;
            var user_id = req.user.id;
            console.log("in the token delete",q_id,user_id);
            userDashboard.tokenDelete(user_id,q_id,res,res).then(result=>{
                if(result){
                    res.render("userDashboard",{
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
    });




module.exports = router;