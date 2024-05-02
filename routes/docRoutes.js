// Imports
const express = require("express");
const path = require("path"); // Import the path module (used to resolve file paths)
const router = express.Router();

router.get("/docs", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "docs.html"));
}); // Define the /docs route that sends the docs.html file

router.get("/arch", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "arch.html"));
}); // Define the /arch route that sends the arch.html file

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "home.html"));
}); // Define the / route that sends the home.html file

module.exports = router; // Export the router object
