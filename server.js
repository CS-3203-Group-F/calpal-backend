require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// Set up routes

// Check if the server is running
app.listen(port, () => {
  console.log("Server is running on port 3000");
});
