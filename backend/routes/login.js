const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // For password comparison
const jwt = require('jsonwebtoken'); // For token generation
const User = require('../models/user-model'); // Adjust the path to your User model
const { generatetoken } = require('../utils/generatetoken'); // Adjust based on your token generation logic

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input fields
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        // Check if user exists
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Generate token
        const token = generatetoken(user);

        // Set cookie with token
        res.cookie('token', token, { httpOnly: true });

        // Respond with success message
        res.status(200).json({ message: 'Login successful!', token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

module.exports = router;
