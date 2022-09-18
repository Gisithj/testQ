const db = require("./db");

const Queue = function(queue){
    this.qName = queue.qName;
    this.qType = queue.qType;
    this.maxToken = queue.maxToken;
    this.tokenRemain = queue.tokenRemain;
    this.qStatus = queue.qStatus;
} 


Queue.create = (queue) => {

     return new Promise((resolve,reject)=>{
      db.query("INSERT INTO queue SET ?", [qName,qType,maxToken,null,qStatus], (err, res) => {
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

  Queue.findBusinessOne = (field,userValue) =>{

    return new Promise((resolve,reject)=>{
      db.query(`SELECT * FROM test.queue WHERE b_id = ?;`,[userValue],(err,res)=>{
        if(err){          
            console.log("error: ", err);
            reject(err);
            
        }        
        if(res!=null || res!='undefined'){        
            console.log(` findeBusinessOne queues when checking in ${field}`, res);
            resolve(res);
        }
            
        
    });
    })
  };

  Queue.findOne = (field,userValue) =>{

    return new Promise((resolve,reject)=>{
      db.query(`SELECT queue.qName, queue.qType, queue.maxToken,queue.tokenRemain,queue.qStatus 
      FROM queue 
      INNER JOIN token ON token.q_id = queue.q_id
      where token.${field} = ?; `,[userValue],(err,res)=>{
        if(err){          
            console.log("error: ", err);
            reject(err);
            
        }        
        if(res!=null || res!='undefined'){        
            console.log(` findOnefound queues when checking in ${field}`, res);
            resolve(res);
        }
            
        
    });
    })
  };

  Queue.findAll = (field,userValue) =>{
    console.log(field,userValue);
    return new Promise((resolve,reject)=>{
    //   db.query(`SELECT DISTINCT queue.qName, queue.qType, queue.maxToken,queue.tokenRemain,queue.qStatus 
    //   FROM queue 
    //   INNER JOIN token ON token.q_id = queue.q_id
    //   where token.${field} != ?; `,[userValue],(err,res)=>{
        db.query(`SELECT distinct  queue.qName, queue.qType, queue.tokenRemain,queue.qStatus 
        FROM queue 
        INNER JOIN token ON token.q_id = queue.q_id
        where token.userr_id != "13" and token.q_id != (Select q_id from token where userr_id = "13"); `,[userValue],(err,res)=>{
        if(err){          
            console.log("error: ", err);
            reject(err);
            
        }        
        if(res!=null || res!='undefined'){        
            console.log(`findAll found queues when checking in ${field}`, res);
            resolve(res);
        }
            
        
    });
    })
  };

  Queue.findAllLike = (userValue) =>{
    console.log(userValue);
    return new Promise((resolve,reject)=>{
      db.query(`SELECT * FROM queue
      WHERE qName LIKE ?; `,[`${userValue}%`],(err,res)=>{
        if(err){          
            console.log("error: ", err);
            reject(err);
            
        }        
        if(res!=null || res!='undefined'){        
            console.log(`findAllLike found queues when checking in queue`, res);
            resolve(res);
        }
            
        
    });
    })
  };

  module.exports = Queue;



