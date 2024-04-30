const express = require("express");
const eventsService = require("../services/eventsService");

const CreateEvent = async (req, res) => {
  try {
    const eventData = req.body;
    const newEvent = await eventsService.createEvent(eventData);
    res.json(newEvent);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const EditEventById = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const eventData = req.body;
    const updatedEvent = await eventsService.editEventById(eventId, eventData);
    res.json(updatedEvent);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const EventIdsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const eventIds = await eventsService.getEventIdsByUserId(userId);
    res.json(eventIds);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const EventDetailsById = async (req, res) => {
  try {
    const eventId = req.params.eventId;
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
