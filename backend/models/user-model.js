const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({ 
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    designation: { type: String, required: true },
    department: { type: String, required: true },
    branch: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema); 
