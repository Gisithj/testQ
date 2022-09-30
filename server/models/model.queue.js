const db = require("./db");

const Queue = function(queue){
    this.qName = queue.qName;
    this.qType = queue.qType;
    this.maxToken = queue.maxToken;
    this.tokenRemain = queue.tokenRemain;
    this.qStatus = queue.qStatus;
} 


Queue.create = (queue,req,res) => {
      console.log("crete query called",queue);
     return new Promise((resolve,reject)=>{
      db.query("INSERT INTO test.queue (qName, qType,maxToken,qStatus, b_id,currentToken) VALUES (?, ?, ?, ?, ?,'0');",
       [queue.qName,queue.qType,queue.maxToken,queue.qStatus,queue.b_id], (err, res) => {
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
      // db.query(`SELECT * FROM  queue where ${field} = ?; `,[userValue],(err,res)=>{
        db.query(`SELECT queue.q_Id,queue.qName, queue.qType, queue.tokenRemain,queue.qStatus 
          FROM queue 
          INNER JOIN token ON token.q_id = queue.q_id
          where token.userr_id = ?;`,[userValue],(err,res)=>{
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

  Queue.OpenOneQueue = (q_Id,userr_Id) =>{

    return new Promise((resolve,reject)=>{
      db.query(`SELECT distinct  queue.qName, queue.maxToken, queue.currentToken
      FROM queue 
      INNER JOIN token ON token.q_id = queue.q_id
      where token.userr_id = ? and token.q_id = ?;`,[userr_Id,q_Id],(err,res)=>{
        if(err){          
            console.log("error: ", err);
            reject(err);
            
        }        
        if(res!=null || res!='undefined'){        
            console.log(` OpenOneQueue checking in`, res);
            resolve(res);
        }
            
        
    });
    })
  };

  Queue.findAll = (field,userValue) =>{
    console.log(field,userValue);
    return new Promise((resolve,reject)=>{
      db.query(` select distinct queue.q_Id, queue.qName, queue.qType, queue.maxToken, queue.tokenRemain, queue.currentToken, queue.qStatus
       from test.queue right join test.token on 
      test.queue.q_Id  not in (select q_id from test.token where userr_id = ?);  `,[userValue],(err,res)=>{
        // db.query(`SELECT distinct  queue.qName, queue.qType, queue.maxToken, queue.tokenRemain, queue.currentToken, queue.qStatus 
        // FROM queue ; `,[userValue],(err,res)=>{
        if(err){          
            console.log("error: ", err);
            reject(err);
           
        }        
        if(res!=null || res!='undefined'){        
            // console.log(`findAll found queues when checking in ${field}`, res);
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

  Queue.delete = (q_id) => {

    return new Promise((resolve,reject)=>{
     db.query(`DELETE FROM queue WHERE q_Id = ?;`, [q_id],(err, res) => {
       if (err) {
         reject(err)
         console.log("error: ", err);
       }
       if(res!=null || res!='undefined'){        
        console.log(`found users after delete `, res);
        resolve(true);
    }
     
       
     });
   })
   
 };

  module.exports = Queue;



