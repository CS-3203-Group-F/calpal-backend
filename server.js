require("dotenv").config();
const express = require("express");
const db = require("./models/db");
const eventsRoutes = require("./routes/eventsRoutes");


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
app.use("/", eventsRoutes);

// Check if the server is running
app.listen(port, () => {
  console.log("Server is running on port 3000");
});
