const express = require('express');
const router = express.Router();
const User = require('../models/user-model');
const isloggedin = require('../middlewares/isloggedin');
const WorkshopData=require('../models/workshops');

router.post("/add",isloggedin,async(req,res)=>{
   try{
        const email = req.user.email;
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        const newWorkshop = new WorkshopData({
              title: req.body.title,
              Description: req.body.Description,
              Category: req.body.Category,
              Date: req.body.Date,
              StartTime: req.body.StartTime,
              EndTime:req.body.EndTime,
              Venue:req.body.Venue,
              Mode:req.body.Mode,
              Instructor:user._id,
            });
            await newWorkshop.save();
            res.status(201).json({ message: "Workshop added successfully" });

   }catch (error) {
    console.error("Error adding workshop:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


router.get("/data",async(req,res)=>{
  try{
    const Workshops=await WorkshopData.aggregate([
      {
        $lookup: {
          from: "users", // Name of the users collection
          localField: "Instructor", // Field in Wrokshops that references the user's _id
          foreignField: "_id", // The field in the users collection that is being matched
          as: "userDetails", // The name of the new field that will contain the user data
        },
      },
      {
        $unwind: {
          path: "$userDetails", // Flatten the userDetails array so that each Workshop has a single user object
        },
      },
      {
        $project: {
          // Select the fields to return in the response
          title: 1, // Assuming "title" is a field in Workshops
          Description: 1, // Assuming "Description" is a field in Workshops
          Category:1,
          Date:1,
          StartTime:1,
          EndTime:1,
          Venue:1,
          Mode:1,
          userDetails: {
            fullName: 1,
            email: 1,
            department: 1, // Include user details such as fullName, email, etc.
          },
        },
      },
    ]);
    res.status(200).json(Workshops);

  }catch(error){
    console.log("Unable to fetch the data:",error);
    res.status(500).json({message:"Unable to fetch the data"});
  }
})


module.exports = router;