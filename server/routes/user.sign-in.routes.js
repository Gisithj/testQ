const express = require("express");
const router = express.Router();
const passport = require("../controllers/passport");
const auth = require("./auth.routes");


router.route("/")
    .get(function(req,res){
      auth.isLoggedIn(req,res,function(){
        res.redirect("/userDashboard");
        // res.redirect('/~' + req.user.username)
      });
    })
    
    
    .post(passport.authenticate('local-user', { failureRedirect: '/user-sign-in', failureMessage: true }),
    function(req, res) {
      // res.redirect('/~' + req.body.username);
      res.redirect("/userDashboard");
    });


module.exports = router;