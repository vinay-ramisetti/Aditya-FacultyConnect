const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({ 
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    designation: { type: String, required: true },
    department: { type: String, required: true },
    EmpID:String,
    JoiningDate:String,
    Qualification:String,
    YearOfpass:String,
    UG:String,
    PG:String,
    Phd:String,
    Industry:String,
    TExp:Number,
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }]
});

module.exports = mongoose.model("User", userSchema); 
