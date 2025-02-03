const mongoose=require("mongoose");

const researchSchema= new mongoose.Schema({
  // title:{type:String, required:true},
  // description:{type:String},
  // publishedDate:{type:Date,required:true},
  userId:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
  SciArticles: [{
    articleDetails: { type: String, required: true },
    ISSN: { type: String, required: true },
    authorPosition: { type: String, required: true },
    status:{type:Boolean, default:false},
    rejected:{type:Boolean,default:false},
  }],
  WosArticles: [{
    articleDetails: { type: String, required: true },
    ISSN: { type: Number, required: true },
    authorPosition: { type: String, required: true },
    status:{type:Boolean, default:false},
    rejected:{type:Boolean,default:false},
  }],
  Proposals: [{
    proposalDetails: { type: String, required: true },
    Agency: { type: String, required: true },
    Amount: { type: Number, required: true },
    status:{type:Boolean, default:false},
    rejected:{type:Boolean,default:false},
  }],
  Papers: [{
    paperDetails: { type: String, required: true },
    authorPosition: { type: String, required: true },
    status:{type:Boolean, default:false},
    rejected:{type:Boolean,default:false},
  }],
  Books: [{
    bookDetails: { type: String, required: true },
    ISBN: { type: Number, required: true },
    status:{type:Boolean, default:false},
    rejected:{type:Boolean,default:false},
  }],
  Chapters: [{
    chapterDetails: { type: String, required: true },
    Publisher: { type: String, required: true },
    ISBN: { type: Number, required: true },
    authorPosition: { type: String, required: true },
    status:{type:Boolean, default:false},
    rejected:{type:Boolean,default:false},
  }],
  PGranted: [{
    PTitle: { type: String, required: true },
    PNumber: { type: Number, required: true },
    Country: { type: String, required: true },
    GDate:{type:Date,required:true},
    status:{type:Boolean, default:false},
    rejected:{type:Boolean,default:false},
  }],
  PFiled: [{
    PFiled: { type: String, required: true },
    PNumber: { type: Number, required: true },
    Country: { type: String, required: true },
    PDate:{type:Date,required:true},
    status:{type:Boolean, default:false},
    rejected:{type:Boolean,default:false},
  }],
})

module.exports = mongoose.model("Research", researchSchema); 