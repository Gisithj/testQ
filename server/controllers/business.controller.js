const Business = require("../models/model.business");
const path = require("path");
const login = require("./login.controller");
const bcrypt = require('bcrypt');

var isError = false;
var errorDescription="";
var isExist = false;
const saltRounds = 10;


  function isAlreadyExist(field, businessData) {

    return new Promise((resolve,reject)=>{
      Business.findOne(field, businessData).then(result=>{
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

const existanceValidation =(business)=>{
    return new Promise((resolve,reject)=>{
        isAlreadyExist("email", business.email).then(result=>{
            if(result!=true){       
                 isExist = false;
                 errorDescription=""
            }else{
                errorDescription="Email";       
                isExist = true;
               return resolve(isExist);
            }
          }).then( isAlreadyExist("username", business.username).then(result=>{
            if(result!=true){        
                 isExist = false;
                 errorDescription=""
            }else{
                errorDescription="Username";       
                isExist = true;
                return resolve(isExist);
            }
          })).then( isAlreadyExist("telNo", business.telNo).then(result=>{
            if(result!=true){     
                 isExist = false;
                 errorDescription=""
            }else{
                errorDescription="Tel No";       
                isExist = true;
                return resolve(isExist);
            }
          })).then( isAlreadyExist("nicNo", business.nicNo).then(result=>{
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
    
});
  const business = {
    bName: req.body.bName,
    bType: req.body.bType,
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

  existanceValidation(business).then(result=>{
    if(result==true){
        isError=true;
        res.render("business.signup.ejs", {            
              isError: isError,
              errorDescription: errorDescription,
            });
    }else if(result==false){
        console.log("here");
        Business.create(business).then(result=>{
         
          return res.redirect('/business-sign-in');
          
        }).catch(err =>{
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the business.",
              });
        });
    }
  }).catch(err=>{
    console.log(err);
  });
 

}


function findOne(field, userValue,req,res) {
  return new Promise((resolve,reject)=>{
    console.log("In the business one", field,userValue);
    Business.findOne(field, userValue).then(result=>{
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

function businessUpdate(user,req,res) {

  return new Promise((resolve,reject)=>{
      Business.businessUpdate(user).then(result=>{
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

module.exports = { create ,findOne, businessUpdate};


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