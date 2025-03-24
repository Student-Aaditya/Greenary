if (process.env.NODE_ENV != "Production") {
    require("dotenv").config();
}


const express=require("express");
const app=express();
const port=8020;
const path=require("path");
const ejsMate=require("ejs-mate");
const methodOverride=require("method-override");
const mongoose = require("mongoose");
const User=require("./Model/user.js");
const passport=require("passport");
const passportLocal=require("passport-local");
const session=require("express-session");
const Mongo = process.env.MONGO_URL;

app.set("views",path.join(__dirname,"view"));
app.set("view engine","ejs");
app.engine("ejs", ejsMate);


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const sessionOption = ({
    secret: "musecretcode",
    resave: false,
    saveUninitialized: true,
})

app.use(session(sessionOption));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



async function main() {
    // await mongoose.connect("mongodb://127.0.0.1:27017/Plant");
    await mongoose.connect(Mongo);

}
main().
    then(() => {
        console.log("sucessful connection");
    }).catch((err) => {
        console.log(err);
    })

app.get("/shop",(req,res)=>{
    res.render("./HOME/shop.ejs");
})

app.get("/live-update",(req,res)=>{
    res.render("./HOME/live-updates.ejs");
})

app.get("/category",(req,res)=>{
    res.render("./HOME/category.ejs");
})

app.get("/",(req,res)=>{
    res.render("./HOME/home.ejs");
})

app.get("/sign",(req,res)=>{
    res.render("sign-up.ejs");
})

app.post("/sign",async (req,res)=>{
    try{
        let {username,email,password}=req.body;
        const newUser=new User({email,username});
        const register=await User.register(newUser,password);
        res.redirect("/");
        console.log(register);
    }catch(err){
        console.log(err);
        res.redirect("/sign");
    }
})

app.get("/login",(req,res)=>{
    res.render("login.ejs");
})

app.post("/login", passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), async (req, res) => {
    console.log("login");
    res.redirect("/");
})



app.listen(port,(req,res)=>{
    console.log(`server working on ${port}`);
})

module.exports=app;