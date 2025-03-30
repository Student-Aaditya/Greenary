const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String }, // This will be hashed using bcrypt
    role: { type: String, enum: ["user", "admin"], default: "user" }, // Role field
});

// Adds username & password hashing with Passport
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
