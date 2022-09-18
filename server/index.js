const express= require("express");
const db = require("./models/db")
const user_sign_in = require("./routes/user.sign-in.routes")
const business_sign_in = require("./routes/business.sign-in.routes")
const user = require("./routes/user.signup.routes");
const business = require("./routes/business.signup.routes");
const userDashboard = require("./routes/user.Dashboard.routes")
const businessDashboard = require("./routes/business.Dashboard.routes")
const logout = require("./routes/log-out.routes")
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
    res.render("index")
});

app.use("/user-sign-in",user_sign_in);
app.use("/user-sign-up",user);
app.use("/userDashboard",userDashboard)
app.use("/userDashboard/findQueues",userDashboard)
app.use("/userDashboard/profile",userDashboard)
app.use("/userDashboard/settings",userDashboard)

app.use("/business-sign-up",business);
app.use("/business-sign-in",business_sign_in);
app.use("/businessDashboard",businessDashboard)
app.use("/businessDashboard/profile",businessDashboard)
app.use("/sign-out",logout)



app.listen(3000,function(){
    console.log("Server is running on port 3000");
});