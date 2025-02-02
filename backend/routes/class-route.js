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
            courseName,
            semester,
            numberOfStudents,
            passCount,
           
        } = req.body;

        if (!numberOfStudents || !passCount) {
            return res.status(400).json({ error: 'numberOfStudents and passCount are required fields' });
        }

        const passPercentage = ((passCount / numberOfStudents) * 100).toFixed(2);

        // Calculate average pass percentage for all classes of the user
        const classes = await Class.find({ teacher: user._id });
        const totalPassPercentage = classes.reduce((acc, cls) => acc + cls.passPercentage, 0);
        const averagePassPercentage = classes.length > 0 ? (totalPassPercentage / classes.length).toFixed(2) : 0;
        let totalMarks = 0;
        if (averagePassPercentage >= 95) {
            totalMarks += 20;
        } else if (averagePassPercentage >= 85) {
            totalMarks += 15;
        } else  {
            totalMarks += 10;
        }
        // Create a new class document
        const newClass = new Class({
            courseName,
            semester,
            numberOfStudents,
            passCount,
            passPercentage, // Calculated value
           
            selfAssessmentMarks:totalMarks,
            averagePercentage: averagePassPercentage,
            teacher: user._id
        });

        // Save the new class to the database
        const savedClass = await newClass.save();

        // Respond with the saved class and average pass percentage
        res.status(201).json({ savedClass, averagePassPercentage });
    } catch (error) {
        console.error('Error saving class:', error);
        res.status(400).json({ error: error.message });
    }
});
router.get("/raw", isloggedin, async (req, res) => {
    const userId = req.user._id;

    try {
        // Fetch classes for the logged-in teacher
        const data = await Class.find({ teacher: userId });

        res.status(200).json({ data });
    } catch (error) {
        console.error("Error fetching classes:", error);
        res.status(500).json({ message: "Unable to fetch classes" });
    }
});


module.exports = router;