const Queue = require("../models/model.queue");
const path = require("path");
const login = require("./login.controller");
const bcrypt = require('bcrypt');

var isError = false;
var errorDescription="";
var isExist = false;
const saltRounds = 10;


  function findOne(field, queueData) {

    return new Promise((resolve,reject)=>{
        Queue.findOne(field, queueData).then(result=>{
            if(result!=0 && result!=null){
              isExist = true;
                resolve(true);
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

  const queue = {
    qName : req.body.qName,
    qType : req.body.qType,
    maxToken : req.body.maxToken,
    tokenRemain : req.body.tokenRemain,
    qStatus : req.body.qStatus,
} 

  Queue.create(queue).then(result=>{
     res.render("businessDashboard");
    
  }).catch(err =>{
      res.status(500).send({
          message:
            err.message || "Some error occurred while creating the queue.",
        });
  });
 

}

module.exports = { create };


// isError = true;
// res.render(path.resolve("views/signup"), {
//   isError: isError,
//   errorDescription: errorDescription,
// });







//   if (isExist) {
    
//     console.log("in the error flow");
//     isError = true;
//     res.render(path.resolve("views/signup"), {
//       isError: isError,
//       errorDescription: errorDescription,
//     });
//     isExist = false;
//      flag = false;


//   } else {
//     console.log("ez bng");
    // User.create(user).then(result=>{
    //     console.log(result);
    //     console.log("inside the controller create");
    //     res.render(path.resolve("views/signin"));
    // }).catch(err =>{
    //     res.status(500).send({
    //         message:
    //           err.message || "Some error occurred while creating the user.",
    //       });
    // });
    
    //  isExist = false;
    //  flag = false;
    //  errorDescription=""

//   }



//   if (isAlreadyExist("email", user.email)) {
//     errorDescription="Email";
//   } else 
//   if (isAlreadyExist("nicNo", user.nicNo)) {
//     errorDescription="Nic No";
   
//   } else if (isAlreadyExist("telNo", user.telNo)) {
//     errorDescription="Tel No";
   
//   } else if (isAlreadyExist("username", user.username)) {
//     errorDescription="Username";
    
//   }
//   console.log(errorDescription);


//    User.findOne(field, userData, function (err, data) {
//     // console.log(data);
//     if (err) {
//       console.log(data);
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while quering findOne email.",
//       });
//     } else if (data != null && data != 0) {
//       console.log("here");
//       isExist = true;
//       flag = true;
//     }});

// User.create(user, function (err, data) {
    //   if (err) {
    //     res.status(500).send({
    //       message:
    //         err.message || "Some error occurred while creating the user.",
    //     });
    //   } else {
    //     res.render(path.resolve("views/signin"));
    //   }
    // });

    
        // console.log(data);
        // if (err) {
        //   console.log(data);
        //   res.status(500).send({
        //     message:
        //       err.message || "Some error occurred while quering findOne email.",
        //   });
        // } else if (data != null && data != 0) {
        //   console.log("here");
        //   isExist = true;
        //   flag = true;
        // }});


        // function create(req,res){

//     const user ={
//         fName : req.body.fName,
//         lName : req.body.lName,
//         email : req.body.email,
//         nicNo : req.body.nic,
//         address : req.body.address,
//         zipCode : req.body.zipCode,
//         telNo : req.body.telNo,
//         username : req.body.username,
//         password : req.body.password
//    }
//     if(!req.body){
//         res.status(404).send({
//             message:"Content cannot be empty"
//         });
//     }
//     if(User.findOne(user,function(err,data){
//         if(err){
//             console.log(data);
//             res.status(500).send({
//                 message:
//                 err.message || "Some error occurred while quering findOne email."
//         })
//         }else if(data==null){
//             console.log(data);
//             User.create(user,function(err,data){
//                 if(err){
//                     res.status(500).send({
//                         message:
//                         err.message || "Some error occurred while creating the user."
//                     });
//                 }else{
//                     res.render(path.resolve("views/signin"))
//                 }
//             })
//         }else{
//             isError =false;
//             res.render(path.resolve("views/signup"),{
//                 isError:isError,
//                 errorDescription :"Mail"})
//             console.log(data);
//         }
//     }));

// }