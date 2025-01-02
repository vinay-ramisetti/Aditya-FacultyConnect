const express = require('express');
const router = express.Router();
const Class = require('../models/class-model');

router.post('/classes', async (req, res) => {
    try {
     
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
            marksDistribution = {},
            teacher
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
            marksDistribution: {
                above95: marksDistribution.above95 || 0,
                between85And95: marksDistribution.between85And95 || 0,
                between75And85: marksDistribution.between75And85 || 0,
                below75: marksDistribution.below75 || 0
            },
            teacher
        });

        const savedClass = await newClass.save();
        res.status(201).json(savedClass);
    } catch (error) {
        console.error('Error saving class:', error);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;