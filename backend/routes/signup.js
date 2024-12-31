const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require('jsonwebtoken'); // For token generation
const User = require('../models/user-model'); // Adjust the path to your User model
const { generatetoken } = require('../utils/generatetoken'); // Adjust based on your token generation logic

router.post('/register', async (req, res) => {
    try {
        const { fullname, email, password, designation, branch } = req.body;

        // Validate input fields
        if (!fullname || !email || !password || !designation || !branch) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(401).json({ message: 'You already have an account, please login.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({
            fullName: fullname,
            email,
            password: hashedPassword,
            designation,
            branch,
        });

        // Generate token
        const token = generatetoken(user);

        // Set cookie with token
        res.cookie('token', token, { httpOnly: true });

        // Respond with success message
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

module.exports = router;
