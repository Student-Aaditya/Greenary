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
const Mongo = process.env.MONGO_URL;
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const flash = require('connect-flash');
const cors=require("cors");
const bcrypt=require("bcrypt");


app.set("views",path.join(__dirname,"view"));
app.set("view engine","ejs");
app.engine("ejs", ejsMate);


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.use(methodOverride("_method"));

const sessionOption = ({
    secret: "musecretcode",
    resave: false,
    saveUninitialized: true,
})

app.use((req,res,next)=>{
    res.locals.user=req.user;

    next();
})

app.use(session(sessionOption));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




async function main() {
    try {
        console.log("Attempting to connect to MongoDB...");
        await mongoose.connect("mongodb://127.0.0.1:27017/Greenary", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000,  
        });
        console.log("Successful connection to MongoDB");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}


const globallimit=rateLimit({
    window:10 *60*1000,
    max:2,
    message:{message:"too many time login please login after some time"},
    standarHeaders:true,
    legacyHeaders:false
});

app.use(cors({
    origin: "http://localhost:8020", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));



const adminAuth = async (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "You must be logged in." });
    }

    const user = await User.findById(req.user._id);
    if (!user || user.role !== "admin") {
        return res.status(403).json({ message: "Access denied. Admins only." });
    }

    next();
};



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

app.post("/sign",globallimit,async (req,res)=>{
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

app.post("/login",globallimit, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), async (req, res) => {
    console.log("login");
    res.redirect("/");
})

app.get("/admin",(req,res)=>{
    res.render("admin.ejs");
})

app.get("/admin/sign",(req,res)=>{
    res.render("ad.ejs");
})

app.post("/admin/signup", async (req, res) => {
    try {
        console.log("Received Data:", req.body);
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }
        const existingAdmin = await User.findOne({ email, role: "admin" });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists" });
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newAdmin = new User({ email, password: hashedPassword, role: "admin" });
        await newAdmin.save();
        res.json({ message: "Admin account created successfully!" });
    } catch (error) {
        console.error("Error in admin signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post('/admin/unlock-user', async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    user.failedAttempts = 0;
    user.lockUntil = undefined;
    await user.save();
    res.json({ message: 'User account unlocked successfully.' });
});


app.listen(port,(req,res)=>{
    console.log(`server working on ${port}`);
})

module.exports=app;