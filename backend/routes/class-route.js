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
            selfAssessmentMarks,
            courseFeedback,
            above95,
            between85And95,
            between75And85,
            below75
        } = req.body;

      
        if (!numberOfStudents || !appeared || !passCount) {
            return res.status(400).json({ error: 'numberOfStudents, appeared, and passCount are required fields' });
        }

        if (appeared > numberOfStudents) {
            return res.status(400).json({ error: 'Appeared students cannot exceed total number of students' });
        }

        const passPercentage = ((passCount / appeared) * 100).toFixed(2);

        
        const totalWeightedScore =
            (95 * (above95 || 0)) +
            (90 * (between85And95 || 0)) +
            (80 * (between75And85 || 0)) +
            (70 * (below75 || 0));

        const averagePercentage = (totalWeightedScore / appeared).toFixed(2);

        // Create a new class document
        const newClass = new Class({
            className,
            courseName,
            semester,
            branch,
            section,
            numberOfStudents,
            appeared,
            passCount,
            passPercentage, // Calculated value
            averagePercentage, // Calculated value
            selfAssessmentMarks,
            courseFeedback,
            above95,
            between85And95,
            between75And85,
            below75,
            teacher: user._id
        });

        // Save the new class to the database
        const savedClass = await newClass.save();

        // Respond with the saved class
        res.status(201).json(savedClass);
    } catch (error) {
        console.error('Error saving class:', error);
        res.status(400).json({ error: error.message });
    }
});
router.get("/data", isloggedin, async (req, res) => {
    try {
        const userId = req.user._id;

        // Fetch classes for the logged-in teacher
        const Data = await Class.find({ teacher: userId });

        // Check if Data is empty
        if (Data.length === 0) {
            return res.status(200).json({ Data: [], overallRating: 0 });
        }

        // Function to calculate rating
        const calculateRating = (passPercent, averagePercent, selfAssessment) => {
            const weights = { performance: 0.4, average: 0.4, selfAssessment: 0.2 };
            return (
                weights.performance * passPercent +
                weights.average * averagePercent +
                weights.selfAssessment * selfAssessment
            );
        };

        let totalRating = 0;
        const enhancedData = Data.map((item) => {
            const { passPercentage, averagePercentage, selfAssessmentMarks } = item;

            // Calculate rating for each class
            const rating = calculateRating(passPercentage, averagePercentage, selfAssessmentMarks);
           
            totalRating += rating;

            return { ...item._doc, rating: rating.toFixed(2) }; 
        });

        // Calculate overall rating
        const overallRating = (totalRating / Data.length).toFixed(2);
  
        // Respond with the enhanced data and overall rating
        res.status(200).json({ Data: enhancedData, overallRating });
    } catch (error) {
        console.error("Unable to fetch the data:", error);
        res.status(500).json({ message: "Unable to fetch the data" });
    }
});
router.get("/otherclass/:id", async (req, res) => {
    const { id } = req.params;
    try {
      // Find classes by teacher's ID (not userId)
      const classdata = await Class.find({ teacher: id });
      
      if (classdata.length === 0) {
        return res.status(404).json({ message: "No class found for this user" });
      }
      
      res.status(200).json(classdata);
    } catch (error) {
      console.log("Failed to fetch the resources!!", error);
      res.status(500).json({ message: "Unable to fetch the data" });
    }
});

  
module.exports = router;