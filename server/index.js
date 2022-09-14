const express= require("express");
const db = require("./models/db")
const sign_in = require("./routes/sign-in.routes")
const sign_up = require("./routes/sign-up.routes")
const user = require("./routes/user.routes");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs")
var passport = require('passport');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
require('dotenv').config({ path: ".env" })


const app = express();

app.set('/views', __dirname + 'views');
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use("/public",express.static(path.resolve("public")));
app.use(express.static(path.join(__dirname, 'public')));


var option = {
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DB,
}

app.use(session({
    key :'session_cookie_anme',
  secret: 'session_cookie_secret',  
  store: new MySQLStore(option),
  resave: false,
  saveUninitialized: false,
  cookie:{
    maxAge:1000*60*60*24,
  }
}));

app.use(passport.session());
app.use(passport.initialize());

app.get("/",function(req,res){
    res.sendFile(path.resolve("views/index.html"))
});

app.use("/sign-in",sign_in);
app.use("/sign-up",sign_up);
app.use("/sign-up",user);



app.listen(3000,function(){
    console.log("Server is running on port 3000");
});