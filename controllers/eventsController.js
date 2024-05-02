const express = require("express");
const eventsService = require("../services/eventsService");

// controller for creating a new event takes a request and response object as arguments
const CreateEvent = async (req, res) => {
  try {
    // destructure the event data from the request body
    const eventData = req.body;
    // call the createEvent method from the eventsService with the event data as an argument
    const newEvent = await eventsService.createEvent(eventData);
    // send a response with the new event object
    res.json(newEvent);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// controller for editing an event by ID takes a request and response object as arguments
const EditEventById = async (req, res) => {
  try {
    // destructure the event ID and event data from the request parameters and body
    const eventId = req.params.eventId;
    // destructuring the event data from the request body
    const eventData = req.body;
    // the eventsService with the event ID and event data as arguments
    const updatedEvent = await eventsService.editEventById(eventId, eventData);
    res.json(updatedEvent);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// controller for getting event IDs by user ID takes a request and response object as arguments
const EventIdsByUserId = async (req, res) => {
  try {
    // destructure the user ID from the request parameters
    const userId = req.params.userId;
    // call the getEventIdsByUserId method from the eventsService with the user ID as an argument
    const eventIds = await eventsService.getEventIdsByUserId(userId);
    res.json(eventIds);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// controller for getting event details by ID takes a request and response object as arguments
const EventDetailsById = async (req, res) => {
  try {
    // destructure the event ID from the request parameters
    const eventId = req.params.eventId;
    // call the getEventDetailsById method from the eventsService with the event ID as an argument
    const eventDetails = await eventsService.getEventDetailsById(eventId);
    res.json(eventDetails);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  CreateEvent,
  EditEventById,
  EventIdsByUserId,
  EventDetailsById,
};
