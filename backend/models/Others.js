const mongoose=require("mongoose");

const othersSchema= new mongoose.Schema({
  userId:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
  Activities: [{
    activityDetails:{type:String, required:true},
  }],
  Responsibilities: [{
    Responsibility: { type: String, required: true },
    assignedBy: { type: String, required: true },
  }],
  Contribution: [{
    contributionDetails: { type: String, required: true },
    Benefit: { type: String, required: true },
  }],
  Awards: [{
    Award: { type: String, required: true },
    IssuingOrg: { type: String, required: true },
  }],
})

module.exports = mongoose.model("Others", othersSchema); 