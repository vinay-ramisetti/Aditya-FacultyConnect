const mongoose=require("mongoose");

const researchSchema= new mongoose.Schema({
  title:{type:String, required:true},
  description:{type:String},
  publishedDate:{type:Date,required:true},
  userId:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
})

module.exports = mongoose.model("Research", researchSchema); 