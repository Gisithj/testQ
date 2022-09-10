const mysql = require("mysql2");
require('dotenv').config({ path: ".env" })

console.log(process.env.DB)
const connection = mysql.createConnection({
    host : process.env.HOST,
    database : process.env.DB,
    user : process.env.USER,
    password : process.env.PASSWORD
});

connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("MYSQL database is successfully connected");
    }
});

module.exports = connection;