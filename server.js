require("dotenv").config();
const express = require("express");
const db = require("./models/db"); // Adjust the path according to your project structure
const initializePassport = require("./passportConfig");
const passport = require("passport");





const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());



// Test route
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// Function to test the database connection
const testDbConnection = async () => {
  try {
    const res = await db.query("SELECT NOW()");
    console.log(`Database connection successful: ${res.rows[0].now}`);
  } catch (err) {
    console.error(`Failed to connect to the database: ${err.message}`);
    process.exit(1); // Exit the application if there is a connection error
  }
};

// Call the function to test the DB connection
testDbConnection();

// Set up routes

// Check if the server is running
app.listen(port, () => {
  console.log("Server is running on port 3000");
});

initializePassport(passport); // Pass the passport module to the function
// Initialize passport not sure if this is correct 
app.use(session({
  secret: process.env.SESSION_SECRET, // Keep this secret in environment variables
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());