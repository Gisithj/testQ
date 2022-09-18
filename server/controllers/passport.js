const bcrypt = require('bcrypt');
var passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/model.user");
const Business = require("../models/model.business");



passport.use("local-user",new LocalStrategy(function verify(username, password, cb) {
    User.findOne("username",username).then(result=>{

        if(result!=0 && result!=null){
            console.log(result[0].user_Id);
            const user = {
                id: result[0].user_Id,
                username:result[0].username
              };
            bcrypt.compare(password, result[0].password ).then(function(result) {
                if(result == true){
                    console.log("password match");
                   
                    
                    return cb(null, user);
                }else{
                    console.log("Incorrect password");
                    return cb(null, false, { message: 'Incorrect password.' }); 
                }
            });
        }else{
            console.log("Incorrect username");
            return cb(null, false, { message: 'Incorrect Username.' });
        }
    }).catch(err=>{
        console.log("Error here");
        return cb(err)
    })
  }));

  passport.use("local-business",new LocalStrategy(function verify(username, password, cb) {
    Business.findOne("username",username).then(result=>{

        if(result!=0 && result!=null){
            console.log("int the local-business passport",result[0].user_Id);
            const business = {
                id: result[0].b_Id,
                username:result[0].username
              };
            bcrypt.compare(password, result[0].password ).then(function(result) {
                if(result == true){
                    console.log("password match");               
                    return cb(null, business);
                }else{
                    console.log("Incorrect password");
                    
                    return cb(null, false, { message: 'Incorrect password.' }); 
                }
            });
        }else{
            console.log("Incorrect username");
            return cb(null, false, { message: 'Incorrect Username.' });
        }
    }).catch(err=>{
        console.log("Error here");
        return cb(err)
    })
  }));
  
passport.serializeUser(function(user, cb) {
    console.log("serialize");
    console.log(user);
    process.nextTick(function() {
      cb(null, { id: user.id, username: user.username });
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    console.log("Deserialize");
    console.log(user.id);
    process.nextTick(function() {
      return cb(null, user);
    });
  });

  module.exports = passport;