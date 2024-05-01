const express = require("express");
const eventsController = require("../controllers/eventsController");
const router = express.Router();

// Route to create a new event
router.post("/createEvent", eventsController.CreateEvent);

// Route to edit an event
router.post("/editEvent/:eventId", eventsController.EditEventById);

// Route to get event IDs by user ID
router.get("/events/:userId", eventsController.EventIdsByUserId);

// Route to get event details by event ID
router.get("/event/:eventId", eventsController.EventDetailsById);

module.exports = router;
