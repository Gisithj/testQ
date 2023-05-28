const db = require("./db");

const Token = function(token){
    this.token_id = token.token_id;
    this.q_id = token.q_id;
    this.userr_id = token.userr_id;
} 

Token.delete = (userr_id,q_id) => {

    return new Promise((resolve,reject)=>{
     db.query(`DELETE from token WHERE userr_id = ${userr_id} AND q_id = ${q_id};`, (err, res) => {
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

 Token.Add = (userr_id,q_id) => {
  var currentToken;
  var tokenRemain;
  return new Promise((resolve,reject)=>{
    db.query(`select currentToken,tokenRemain,maxToken from queue where q_Id = ?;`,[q_id], (err, res) => {
    if (err) {
      reject(err)
      console.log("error: ", err);
    }
    if(res!=null || res!='undefined'){       
      console.log("selected queue field",res);
      if(res[0].currentToken=='' || res[0].currentToken==null){
        currentToken=1;
      }else{
        currentToken=res[0].currentToken+1
      }
      if(res[0].tokenRemain=='' || res[0].tokenRemain==null){
        tokenRemain=res[0].maxToken;
      }else{
        tokenRemain=res[0].tokenRemain-1
      }
      console.log("currentToken",currentToken,tokenRemain);
      
      

      db.query(`update queue set tokenRemain=?, currentToken =? where q_Id = ?;`, [tokenRemain,currentToken,q_id],(err, res) => {
        if (err) {
          reject(err)
          console.log("error: ", err);
        }
        if(res!=null || res!='undefined'){        
          db.query(`insert into test.token values(?,?,?);`,[currentToken,q_id,userr_id], (err, res) => {
            if (err) {
              reject(err)
              console.log("error: ", err);
            }
            if(res!=null || res!='undefined'){       
              console.log(res);
              resolve(true);
          }})
      }
      })
 }})
 



 
   
 
 })
 
};

 module.exports = Token;