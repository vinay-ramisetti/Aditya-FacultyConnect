const express=require('express');
const router=express.Router();
const User = require('../models/user-model');
const Departments=require('../models/departments');
const isloggedin =require('../middlewares/isloggedin')

router.get("/",isloggedin,async(req,res)=>{
  try {
    const email = req.user.email;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get('/faculty', async(req,res)=>{
  try{
    const facultyData = await User.find({});
    res.status(200).json(facultyData);
  }
  catch(error){
   console.log("Unable to fetch the data:",error);
   res.status(500).json({ message: "Unable to fetch the data" });
  }
}); 

router.get('/departments', async(req,res)=>{
  try{
  const departmentsData= await Departments.find({});
  res.status(200).json(departmentsData);
  }
  catch(error){
    console.log('Unable to fetch the data:',error);
    res.status(500).json({message:"Unable to fetch the Data"});
  }
});

module.exports=router;