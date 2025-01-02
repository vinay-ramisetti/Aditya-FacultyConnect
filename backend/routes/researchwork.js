const express=require('express');
const router=express.Router();
const User=require('../models/user-model');
const ResearchData=require('../models/research');
const isloggedin = require('../middlewares/isloggedin');

router.post("/add",isloggedin,async(req,res)=>{
  try{
    const email=req.user.email;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    const newResearch = new ResearchData({
      title: req.body.title,
      description: req.body.description,
      publishedDate: req.body.date,
      userId: user._id, 
    });

    await newResearch.save();
    res.status(201).json({ message: "Research added successfully" });
  }catch (error) {
    console.error("Error adding research:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/get",async(req,res)=>{
   try{
      const researchData = await ResearchData.find({});
      res.status(200).json(researchData);
    }
    catch(error){
     console.log("Unable to fetch the data:",error);
     res.status(500).json({ message: "Unable to fetch the data" });
    }
})

module.exports = router;