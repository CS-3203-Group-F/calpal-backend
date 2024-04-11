const express = require("express");
const eventsService = require("../services/eventsService");

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

module.exports = { EventIdsByUserId, EventDetailsById };
