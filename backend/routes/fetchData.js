const express=require('express');
const router=express.Router();
const User = require('../models/user-model');
const Departments=require('../models/departments');

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