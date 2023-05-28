const Token = require("../models/model.token");


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


  function tokenAdd(userr_id,q_id,req,res) {

    return new Promise((resolve,reject)=>{
        Token.Add(userr_id,q_id).then(result=>{
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

 



  module.exports ={tokenDelete,tokenAdd}