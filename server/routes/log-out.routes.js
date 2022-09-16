const express = require("express");
const router = express.Router();

router.route("/")
    .get( function(req, res, next){
        console.log("here");
        req.logout(function(err) {
          if (err) { return next(err); }
          res.redirect('/user-sign-in');
        });
      });

module.exports = router;