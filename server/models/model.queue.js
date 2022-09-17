const db = require("./db");

const Queue = function(queue){
    this.qName = queue.qName;
    this.qType = queue.qType;
    this.maxToken = queue.maxToken;
    this.tokenRemain = queue.tokenRemain;
    this.qStatus = queue.qStatus;
} 


queue.create = (queue) => {

     return new Promise((resolve,reject)=>{
      db.query("INSERT INTO queue SET ?", queue, (err, res) => {
        if (err) {
          reject(err)
          console.log("error: ", err);
        }
        
        resolve({ id: res.insertId, ...queue });
        console.log("created queue: ", { id: res.insertId, ...queue });
        ;
      });
    })
    
  };

  queue.findOne = (field,queueData) =>{

    return new Promise((resolve,reject)=>{
      db.query(`SELECT * FROM queue WHERE ${field}= ?`,[queueData],(err,res)=>{
        if(err){          
            console.log("error: ", err);
            reject(err);
            
        }        
        if(res!=null || res!='undefined'){        
            console.log(`found queues when checking in ${field}`, res);
            resolve(res);
        }
            
        
    });
    })
  };

  queue.findAll = (req,res) =>{

    return new Promise((resolve,reject)=>{
      db.query(`SELECT * FROM queue `,(err,res)=>{
        if(err){          
            console.log("error: ", err);
            reject(err);
            
        }        
        if(res!=null || res!='undefined'){        
            console.log(`found queues when checking in ${field}`, res);
            resolve(res);
        }
            
        
    });
    })
    
  };
  module.exports = Queue;



