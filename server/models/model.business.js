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

    return new Promise((resolve,reject)=>{
      db.query(`SELECT * FROM business WHERE ${field}= ?`,[businessData],(err,res)=>{
        if(err){          
            console.log("error: ", err);
            reject(err);
            
        }        
        if(res!=null || res!='undefined'){        
            console.log(`found business when checking in ${field}`, res);
            resolve(res);
        }
            
        
    });
    })
    
  };

    module.exports = Business;


