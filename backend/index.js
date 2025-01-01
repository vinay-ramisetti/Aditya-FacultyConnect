require("dotenv").config(); 
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const cors = require("cors");
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//requie models
const User = require(path.join(__dirname, "models", "user-model"));

//requiring routes
const index1 = require(path.join(__dirname, "routes", "index1"));
const signup = require(path.join(__dirname, "routes", "signup"));
const login = require(path.join(__dirname, "routes", "login"));
const fetchData=require(path.join(__dirname,"routes","fetchData"));
const protectedRoute=require(path.join(__dirname,"routes","protectedRoute"));

//requiring MongoDb
const user = require(path.join(__dirname, "models", "user-model"));

const corsOptions = {
    origin: 'http://localhost:5173', // Specify the frontend URL
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));


//using routes
app.use("/index",index1);
app.use("/signup",signup);
app.use("/login",login);
app.use("/fetchData",fetchData);
app.use("/protectedroute", protectedRoute);
// Database Connection
const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB is connected");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};


// Call the database connection function
ConnectDB();

// Routes
app.get("/logout", (req, res) => {
    return res.clearCookie("token").redirect("/");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
