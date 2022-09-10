const db = require("./db");

const User = function(user){
    this.fName = user.fName;
    this.lName = user.lName;
    this.email = user.email;
    this.nic = user.nic;
    this.address = user.address;
    this.zipCode = user.zipCode;
    this.username = user.username;
    this.password = user.password;
} 

// function createUser(user,result){

// }
User.create = (user, result) => {
    db.query("INSERT INTO user SET ?", user, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created user: ", { id: res.insertId, ...user });
      result(null, { id: res.insertId, ...user });
    });
  };

  module.exports = User;