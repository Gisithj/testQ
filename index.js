const express= require("express");
const bodyParser = require("body-parser");
const path = require("path");


const app = express();

app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended:true}));
app.use("/public",express.static(path.join(__dirname,"public")));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/views/index.html")
})
app.get("/sign-in",function(req,res){
    res.sendFile(__dirname + "/views/signin.html")
})

app.get("/sign-up",function(req,res){
    res.sendFile(__dirname + "/views/signup.html")
})

app.listen(3000,function(){
    console.log("Server is running on port 3000");
})