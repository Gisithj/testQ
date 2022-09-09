const express= require("express");
const bodyParser = require("body-parser");
const path = require("path");


const app = express();

// app.set('views', __dirname + 'views');
app.use(bodyParser.urlencoded({extended:true}));
app.use("/public",express.static(path.resolve("public")));

app.get("/",function(req,res){
    res.sendFile(path.resolve("views/index.html"))
})
app.get("/sign-in",function(req,res){
    res.sendFile(path.resolve("views/signin.html"))
})

app.get("/sign-up",function(req,res){
    res.sendFile(path.resolve("views/signup.html"))
})
app.post("/sign-up",function(req,res){
    res.sendFile(path.resolve("views/signin.html"))
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
    const nicNo = req.body.nic;
    const address = req.body.address;
    const zipCode = req.body.zipCode;
    const telNo = req.body.telNo;
    const username = req.body.username;
    const password = req.body.password;

    console.log(fName,lName,email,nicNo,address,zipCode,telNo,username,password);
    
})

app.listen(3000,function(){
    console.log("Server is running on port 3000");
})