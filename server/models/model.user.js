const db = require("./db");

const User = function(user){
    this.fName = user.fName;
    this.lName = user.lName;
    this.email = user.email;
    this.nicNo = user.nicNo;
    this.address = user.address;
    this.zipCode = user.zipCode;
    this.telNo = user.telNo;
    this.username = user.username;
    this.password = user.password;
} 


User.create = (user) => {

     return new Promise((resolve,reject)=>{
      db.query("INSERT INTO user SET ?", user, (err, res) => {
        if (err) {
          reject(err)
          console.log("error: ", err);
        }
        
        resolve({ id: res.insertId, ...user });
        console.log("created user: ", { id: res.insertId, ...user });
        ;
      });
    })
    
  };

  User.findOne = (field,userData) =>{

    return new Promise((resolve,reject)=>{
      db.query(`SELECT * FROM user WHERE ${field}= ?`,[userData],(err,res)=>{
        if(err){          
            console.log("error: ", err);
            reject(err);
            
        }        
        if(res!=null || res!='undefined'){        
            console.log(`found users when checking in ${field}`, res);
            resolve(res);
        }
            
        
    });
    })
    
  };


  User.userUpdate = (user) =>{
    console.log(user.zipCode,"herer");
    return new Promise((resolve,reject)=>{
      db.query(`UPDATE test.user SET email = ?, address = ?, zipCode = ?, telNo = ?, password =  ? WHERE (user_Id = ?);`
      ,[user.email,user.address,user.zipCode,user.telNo,user.password,user.user_id],(err,res)=>{
        if(err){          
            console.log("error: ", err);
            reject(err);
            
        }        
        if(res!=null || res!='undefined'){        
            console.log(`found users after updating `, res);
            resolve(true);
        }
            
        
    });
    })
    
  };

  

  module.exports = User;



