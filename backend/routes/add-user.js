const express = require('express');
const router = express.Router();
const User = require('../models/user-model');

// Route to update user details
router.put('/', async (req, res) => {
    try {
        const { email, EmpID, JoiningDate, Qualification, YearOfpass, UG, PG, Phd, Industry, TExp } = req.body;
        
        // Check if email is provided
        if (!email) {
            return res.status(400).send('Email is required to update user details');
        }

        // Find the user by email and update the fields
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { EmpID, JoiningDate, Qualification, YearOfpass, UG, PG, Phd, Industry, TExp },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).send('User not found');
        }

        res.status(200).send('User details updated successfully');
    } catch (error) {
        res.status(400).send('Error updating user: ' + error.message);
    }
});

module.exports = router;