const express = require("express");
const router = express.Router();
const passport = require("../controllers/passport");
const auth = require("./auth.routes");


router.route("/")
    .get(function(req,res){
      console.log("in the business sign in");
      auth.isLoggedIn(req,res,function(){
        res.redirect("/businessDashboard");
        // res.redirect('/~' + req.user.username)
      });
    })
    
    
    .post(passport.authenticate('local-business', { failureRedirect: '/business-sign-in', failureMessage: true }),
    function(req, res) {
      console.log("Authenticated done");
      // res.redirect('/~' + req.body.username);
      res.redirect("/businessDashboard");
    });


module.exports = router;