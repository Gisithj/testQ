const Queue = require("../models/model.queue");
const path = require("path");
const login = require("./login.controller");
const bcrypt = require('bcrypt');

var isError = false;
var errorDescription="";
var isExist = false;
const saltRounds = 10;

function findBusinessOne(field, userValue,req,res) {

  return new Promise((resolve,reject)=>{
      Queue.findBusinessOne(field, userValue).then(result=>{
          if(result!=0 && result!=null){
              resolve(result);
          }else{
              resolve(false);
          }
      }).catch(err=>{
          console.log(err);
            res.status(500).send({
              message:
                err.message || "Some error occurred while quering findBusinessOne email.",
            });
           reject(false);
      })
  })
  
}

  function findOne(field, userValue,req,res) {

    return new Promise((resolve,reject)=>{
        Queue.findOne(field, userValue).then(result=>{
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

function findAll(field, userValue,req,res) {
    return new Promise((resolve,reject)=>{
        Queue.findAll(field, userValue).then(result=>{
            if(result){
                resolve(result);
            }else{
                resolve(false);
            }
        }).catch(err=>{
            console.log(err);
              res.status(500).send({
                message:
                  err.message || "Some error occurred while quering findAll email.",
              });
             reject(false);
        })
    })
    
}

function OpenOneQueue(field, q_Id,userr_Id,req,res) {

  return new Promise((resolve,reject)=>{
      Queue.OpenOneQueue(q_Id,userr_Id).then(result=>{
          if(result){
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

async function create(req, res) {

  console.log("create called");
  const queue = {

    b_id : req.user.id,
    qName : req.body.qName,
    qType : req.body.qType,
    maxToken : req.body.maxToken,
    qStatus : req.body.qStatus,
} 

  await Queue.create(queue,req,res).then(result=>{
     res.redirect("/businessDashboard");
    
  }).catch(err =>{
      res.status(500).send({
          message:
            err.message || "Some error occurred while creating the queue.",
        });
  });
 

}


function findAllLike(userValue,req,res) {

    return new Promise((resolve,reject)=>{
        Queue.findAllLike(userValue).then(result=>{
            // console.log("query result find like",result);
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

function queueDelete(q_id,req,res) {

  return new Promise((resolve,reject)=>{
      Queue.delete(q_id).then(result=>{
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


module.exports = { create,findAll,findOne ,findAllLike,findBusinessOne,OpenOneQueue,queueDelete};

