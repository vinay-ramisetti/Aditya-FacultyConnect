const mongoose = require("mongoose");



const userSchema = mongoose.Schema({
    
    branch:String,
    
     
    fullName: String,
    email: String,
    
    password: String,
  

});

module.exports = mongoose.model("users",userSchema); // users is the model .