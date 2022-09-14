const User = require("../models/model.user");





















// const login = (req,res)=>{

//     const user = {
//         username: req.body.username,
//         password: req.body.password,
//       };

//     return new Promise((resolve,reject)=>{
//         User.findOne("username",user.username).then(result=>{
            
//             if(result!=0 && result!=null){
//               bcrypt.compare(user.password, result[0].password ).then(function(result) {
//                 if(result == true){
//                     res.redirect("userDashboard");
//                     resolve(true);
//                   }else{
//                     res.render("signin",{
//                         isError:true,
//                         errorDescription:"Password incorrect"
//                     })
//                     resolve(false);
//                   }
//             });
              
                
//             }else{
//                 res.render("signin",{
//                     isError:true,
//                     errorDescription:"Username incorrect"
//                 })
//                 resolve(false);
//             }
//         }).catch(err=>{
//             console.log(err);
//               res.status(500).send({
//                 message:
//                   err.message || "Some error occurred while quering findOne email.",
//               });
//              reject(err);
//         })
//     })
   

// }



// module.exports ={login};