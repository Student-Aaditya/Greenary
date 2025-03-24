const mongoose=require("mongoose");
// const { type } = require("os");
const passportlocalmongoose=require("passport-local-mongoose");

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    
});

userSchema.plugin(passportlocalmongoose);
module.exports=mongoose.model("User",userSchema);