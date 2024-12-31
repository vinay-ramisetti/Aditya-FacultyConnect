const bcrypt = require('bcrypt');
const { generatetoken } = require('../utils/generatetoken');
const User = require('../models/user-model'); 

module.exports.registerstudent = async function (req, res) {
    try {
        let { fullName, password, email, designation, branch } = req.body;

        console.log(fullName)
        
        // Check for required fields
        if (!fullName || !email || !designation || !branch) {
            return res.status(400).json({ error: 'Fullname, email, designation, and branch are required' });
        }

        // Check if user already exists
        let user = await User.findOne({ email: email });
        if (user) return res.status(401).json({ error: 'You already have an account, please login' });

        
        // Create new user
        user = await User.create({
            fullName,
            password: hashedPassword,
            email,
            designation,
            branch
        });

        // Generate token and respond
        let token = generatetoken(user);
        res.cookie("token", token);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports.login = async function (req, res) {
    let { email, password } = req.body;

    let user = await User.findOne({ email: email });

    if (!user) return res.status(402).send("There is no user with that email, please register");

    bcrypt.compare(password, user.password, function (err, result) {
        if (err) return res.status(500).send(err.message);
        if (!result) return res.status(403).send("Incorrect password, please try again");

        let token = generatetoken(user);
        res.cookie("token", token);
        res.redirect("/home");
    });
};

module.exports.logout = async function (req, res) {
    res.clearCookie("token", { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

    req.session.destroy(err => {
        if (err) {
            return res.status(500).send("Could not log out.");
        }
        res.redirect("/");
    });
};
