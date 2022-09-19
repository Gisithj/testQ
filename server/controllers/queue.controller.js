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

async function create(req, res) {

  const queue = {
    qName : req.body.qName,
    qType : req.body.qType,
    maxToken : req.body.maxToken,
    tokenRemain : req.body.tokenRemain,
    qStatus : req.body.qStatus,
} 

  await Queue.create(queue).then(result=>{
     res.render("businessDashboard");
    
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
            console.log("query result find like",result);
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


module.exports = { create,findAll,findOne ,findAllLike,findBusinessOne};

