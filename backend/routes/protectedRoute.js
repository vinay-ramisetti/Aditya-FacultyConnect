const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isloggedin');

router.get('/some-protected-route', isLoggedIn, (req, res) => {
    // This code will only run if the user is authenticated
    res.json({ message: 'This is protected data', user: req.user });
});

module.exports = router;