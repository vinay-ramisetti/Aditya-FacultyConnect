const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const corsOptions = {
    origin: "*",
    credentials: true, // Fixed typo ("Credential" -> "credentials")
};
app.use(cors(corsOptions));

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
