const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({ 
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    designation: { type: String, required: true },
    department: { type: String},
    type:{type:String},
    EmpID:String,
    JoiningDate:String,
    Qualification:String,
    YearOfpass:String,
    UG:String,
    UGYear:String,
    PG:String,
    PGYear:String,
    Phd:String,
    PhdYear:String,
    Industry:String,
    TExp:Number,
    CoufeedMarks: { type: Number, default: 0 },
    couAvgPerMarks: { type: Number, default: 0 },
    ProctoringMarks: { type: Number, default: 0 },
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }]
});

module.exports = mongoose.model("User", userSchema); 
