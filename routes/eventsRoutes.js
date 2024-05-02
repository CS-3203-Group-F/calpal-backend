// Imports
const express = require("express");
const eventsController = require("../controllers/eventsController");
const router = express.Router(); // Create a new router object

router.post("/createEvent", eventsController.CreateEvent); // Define the route for the CreateEvent controller

router.post("/editEvent/:eventId", eventsController.EditEventById); // Define the route for the EditEventById controller

router.get("/events/:userId", eventsController.EventIdsByUserId); // Define the route for the EventIdsByUserId controller

router.get("/event/:eventId", eventsController.EventDetailsById); // Define the route for the EventDetailsById controller

module.exports = router; // Export the router object
