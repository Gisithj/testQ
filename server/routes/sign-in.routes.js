const express = require("express");
const router = express.Router();
const passport = require("../controllers/passport");


router.route("/")
    .get(function(req,res){
      isLoggedIn(req,res,function(){
        res.redirect('/~' + req.user.username)
      });
    })
    
    
    .post(passport.authenticate('local', { failureRedirect: '/sign-in', failureMessage: true }),
    function(req, res) {
      res.redirect('/~' + req.body.username);
    });

const isLoggedIn = function(req, res, next) {
  if (req.user) {
      next();
  } else {
      res.render('signin');
  }
}
module.exports = router;