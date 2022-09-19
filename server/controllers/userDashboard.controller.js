const Token = require("../models/model.token");
const User = require("../models/model.user")



function tokenDelete(userr_id,q_id,req,res) {

    return new Promise((resolve,reject)=>{
        Token.delete(userr_id,q_id).then(result=>{
            if(result){
                resolve(result);
            }else{
              resolve(false)
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


  function userUpdate(user,req,res) {

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



  module.exports ={tokenDelete,userUpdate}