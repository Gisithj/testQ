const express= require("express");
const sign_in = require("./routes/sign-in")
const sign_up = require("./routes/sign-up")
const bodyParser = require("body-parser");
const path = require("path");


const app = express();

// app.set('views', __dirname + 'views');
app.use(bodyParser.urlencoded({extended:true}));
app.use("/public",express.static(path.resolve("public")));

app.get("/",function(req,res){
    res.sendFile(path.resolve("views/index.html"))
});

app.use("/sign-in",sign_in);
app.use("/sign-up",sign_up);



app.listen(3000,function(){
    console.log("Server is running on port 3000");
});