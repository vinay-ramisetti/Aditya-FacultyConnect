const userModel = require("../models/user-model");
const jwt = require("jsonwebtoken");

module.exports = async function (req, res, next) {
    try {
        // Log all headers to check if the Authorization header is present.
        // Check for token in cookies.
        let token = req.cookies.token;
        // If not found in cookies, check in headers.
        if (!token) {
            token = req.headers['authorization'];
            console.log('Authorization Header:', token); // Log the authorization header

            if (token && token.startsWith('Bearer ')) {
                token = token.slice(7, token.length); // Remove 'Bearer ' prefix
            } else {
                token = null; // Ensure token is null if it doesn't start with 'Bearer '
            }

            if (!token) {
                res.locals.error = "You need to Log In first";
                console.log("Token is not being received");
                return res.redirect("/");
            }
        }

        console.log('Token:', token); // Log the token after extraction

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const user = await userModel.findOne({ email: decoded.email }).select("-password");

        if (!user) {
            res.locals.error = "User not found";
            return res.redirect("/");
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Authentication error:", error);
        res.locals.error = "You need to Log In first";
        return res.redirect("/");
    }
};
