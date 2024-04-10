const eventsService = require("../services/eventsService");

const EventIdsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const eventIds = await eventsService.getEventIdsByUserId(userId);
    res.status(200).json(eventIds);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const EventDetailsById = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const eventDetails = await eventsService.getEventDetailsById(eventId);
    res.status(200).json(eventDetails);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { EventIdsByUserId, EventDetailsById };
