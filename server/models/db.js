const mysql = require("mysql2");
require('dotenv').config({ path: ".env" })

module.exports.option =
        {
            connectionLimit : 10,
            host : process.env.HOST,
            user : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DB
          }
    

var pool  = mysql.createPool(this.option);


pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!
   
    console.log("Database connected successfully");
      // When done with the connection, release it.
      connection.release();   
     
    });

    

module.exports = pool;