const User = require("../models/model.user");
const path = require("path");

const login = (req,res)=>{

    const user = {
        username: req.body.username,
        password: req.body.password,
      };

    return new Promise((resolve,reject)=>{
        User.findOne("username",user.username).then(result=>{
            // console.log(result);
            // console.log(result[0].password);
            if(result!=0 && result!=null){
              isExist = true;
              if(result[0].password === user.password){
                res.redirect("userDashboard");
                resolve(true);
              }else{
                res.render("signin",{
                    isError:true,
                    errorDescription:"Password incorrect"
                })
                resolve(false);
              }
                
            }else{
                res.render("signin",{
                    isError:true,
                    errorDescription:"Username incorrect"
                })
                resolve(false);
            }
        }).catch(err=>{
            console.log(err);
              res.status(500).send({
                message:
                  err.message || "Some error occurred while quering findOne email.",
              });
             reject(err);
        })
    })
   

}

module.exports ={login};