const db = require("./db");

const Business = function(business){
    this.bName = business.bName;
    this.bType = business.bType;
    this.fName = business.fName;
    this.lName = business.lName;
    this.email = business.email;
    this.nicNo = business.nicNo;
    this.address = business.address;
    this.zipCode = business.zipCode;
    this.telNo = business.telNo;
    this.username = business.username;
    this.password = business.password;
} 


Business.create = (business) => {
    
     return new Promise((resolve,reject)=>{
      db.query("INSERT INTO business SET ?", business, (err, res) => {
        if (err) {
          reject(err)
          console.log("error: ", err);
        }
        
        resolve({ id: res.insertId, ...business });
        console.log("created business: ", { id: res.insertId, ...business });
        ;
      });
    })
    
  };

  Business.findOne = (field,businessData) =>{
    console.log(field,businessData,"in the query");
    return new Promise((resolve,reject)=>{
      console.log(`SELECT * FROM business WHERE ${field}= ${businessData}`);
      db.query(`SELECT * FROM business WHERE ${field}= ?`,[businessData],(err,res)=>{
        console.log(res);
        if(err){          
            console.log("error: ", err);
            reject(err);
            
        }        
        if(res.length>=0 || res!='undefined'){        
            console.log(`found business when checking in ${field}`, res);
            resolve(res);
        }
            
        
    });
    })
    
  };

  Business.businessUpdate = (user) =>{
    console.log(user.zipCode,"herer");
    return new Promise((resolve,reject)=>{
      db.query(`UPDATE test.business SET email = ?, address = ?, zipCode = ?, telNo = ?, password =  ? WHERE (b_id = ?);`
      ,[user.email,user.address,user.zipCode,user.telNo,user.password,user.b_id],(err,res)=>{
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

    module.exports = Business;


