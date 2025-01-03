const express = require('express');
const router = express.Router();
const Class = require('../models/class-model');
const isloggedin = require('../middlewares/isloggedin');
const User = require('../models/user-model');

router.post('/classes', isloggedin, async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const {
            className,
            courseName,
            semester,
            branch,
            section,
            numberOfStudents,
            appeared,
            passCount,
            passPercentage,
            averagePercentage,
            selfAssessmentMarks,
            courseFeedback,
            above95,
            between85And95,
            between75And85,
            below75
        } = req.body;

        const newClass = new Class({
            className,
            courseName,
            semester,
            branch,
            section,
            numberOfStudents,
            appeared,
            passCount,
            passPercentage,
            averagePercentage,
            selfAssessmentMarks,
            courseFeedback,
            above95,
            between85And95,
            between75And85,
            below75,
            teacher: user._id
        });

        const savedClass = await newClass.save();
        res.status(201).json(savedClass);
    } catch (error) {
        console.error('Error saving class:', error);
        res.status(400).json({ error: error.message });
    }
});
router.get("/data", isloggedin, async (req, res) => {
    try {
        const userId = req.user._id; 
    
        const Data = await Class.find({ teacher: userId });
      
        res.status(200).json(Data);
    } catch (error) {
        console.log("Unable to fetch the data:", error);
        res.status(500).json({ message: "Unable to fetch the data" });
    }
});
 

module.exports = router;