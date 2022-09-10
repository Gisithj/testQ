const User = require("../models/model.user");
const path = require("path");

function create(req,res){
    if(!req.body){
        res.status(404).send({
            message:"Content cannot be empty"
        });
    }
    const user ={
         fName : req.body.fName,
         lName : req.body.lName,
         email : req.body.email,
         nicNo : req.body.nic,
         address : req.body.address,
         zipCode : req.body.zipCode,
         telNo : req.body.telNo,
         username : req.body.username,
         password : req.body.password
    }

    User.create(user,function(err,data){
        if(err){
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Employee."
            });
        }else{
            res.sendFile(path.resolve("views/signin.html"))
        }
    })
}

module.exports.create = create;