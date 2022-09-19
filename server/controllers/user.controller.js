const User = require("../models/model.user");
const path = require("path");
const login = require("./login.controller");
const bcrypt = require('bcrypt');
const auth = require("../routes/auth.routes")
var isError = false;
var errorDescription="";
var isExist = false;
const saltRounds = 10;


  function isAlreadyExist(field, userData) {

    return new Promise((resolve,reject)=>{
        User.findOne(field, userData).then(result=>{
            if(result!=0 && result!=null){
              isExist = true;
                resolve(true);
            }else{
                resolve(false);
            }
        }).catch(err=>{
            console.log(err);
              // res.status(500).send({
              //   message:
              //     err.message || "Some error occurred while quering findOne email.",
              // reject(false);
              // });
             reject(false);
        })
    })
    
}

const existanceValidation =(user)=>{
    return new Promise((resolve,reject)=>{
        isAlreadyExist("email", user.email).then(result=>{
            if(result!=true){       
                 isExist = false;
                 errorDescription=""
            }else{
                errorDescription="Email";       
                isExist = true;
               return resolve(isExist);
            }
          }).then( isAlreadyExist("username", user.username).then(result=>{
            if(result!=true){        
                 isExist = false;
                 errorDescription=""
            }else{
                errorDescription="Username";       
                isExist = true;
                return resolve(isExist);
            }
          })).then( isAlreadyExist("telNo", user.telNo).then(result=>{
            if(result!=true){     
                 isExist = false;
                 errorDescription=""
            }else{
                errorDescription="Tel No";       
                isExist = true;
                return resolve(isExist);
            }
          })).then( isAlreadyExist("nicNo", user.nicNo).then(result=>{
            if(result!=true){     
                 isExist = false;
                 errorDescription="";
                 
                 
            }else{
                errorDescription="Nic No";       
                isExist = true;
                return resolve(isExist);
            }
            return resolve(isExist);
          })).catch(err=>{
            console.log(err);
          })

          
    })
}

async function create(req, res) {

  var password = "";
  await bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
   
      password = hash;
      console.log(password);
    
});
   console.log(password);
  const user = {
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    nicNo: req.body.nic,
    address: req.body.address,
    zipCode: req.body.zipCode,
    telNo: req.body.telNo,
    username: req.body.username,
    password:password,
  };
console.log(user);
  existanceValidation(user).then(result=>{
    if(result==true){
        isError=true;
        res.render("user.signup.ejs", {
            
              isError: isError,
              errorDescription: errorDescription,
            });
    }else if(result==false){
        console.log("here");
        User.create(user).then(result=>{
          return res.redirect('/user-sign-in');
          
        }).catch(err =>{
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the user.",
              });
        });
    }
  }).catch(err=>{
    console.log(err);
  });
 

}

function findOne(field, userValue,req,res) {
  return new Promise((resolve,reject)=>{
      User.findOne(field, userValue).then(result=>{
          if(result!=0 && result!=null){
            isExist = true;
              resolve(result);
          }else{
              resolve(false);
          }
      }).catch(err=>{
          console.log(err);
            // res.status(500).send({
            //   message:
            //     err.message || "Some error occurred while quering findOne email.",
            // });
           reject(false);
      })
  })
  
}

function findOne(field, userValue,req,res) {
  return new Promise((resolve,reject)=>{
      User.findOne(field, userValue).then(result=>{
        console.log(result);
          if(result!=0 && result!=null){
            isExist = true;
              resolve(result);
          }else{
              resolve(false);
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
  
}

async function userUpdate(req,res) {
  var password = "";
  await bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
   
      password = hash;
      console.log(password);
    
});

var user ={
  user_id:req.user.id,
  email :req.body.email,
  address:req.body.address,
  zipCode:req.body.zipcode,
  telNo: req.body.telNo,
  password:password,
}
  return new Promise((resolve,reject)=>{
      User.userUpdate(user).then(result=>{
          if(result){
              resolve(result);
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
  
}

module.exports = { create ,findOne, userUpdate};


