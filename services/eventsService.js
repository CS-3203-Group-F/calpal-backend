const Event = require("../models/events"); // adjust the path as necessary
const UsersEvent = require("../models/usersEvents"); // ensure you have such a model defined

const getEventIdsByUserId = async (userId) => {
  // Assuming you have a model or way to access the users_events join table
  // For demonstration, I'll assume there's a UsersEvent model you can use similarly
  try {
    const userEvents = await UsersEvent.findAll({
      where: { user_id: userId },
      attributes: ["event_id"],
    });
    return userEvents.map((ue) => ue.event_id); // return only the event IDs
  } catch (err) {
    throw new Error(
      `Unable to retrieve event IDs for user ${userId}: ${err.message}`
    );
  }
};

const getEventDetailsById = async (eventId) => {
  try {
    const event = await Event.findOne({
      where: { event_id: eventId }, // ensure the primary key on your Event model is 'id' or adjust accordingly
    });
    return event ? event.toJSON() : null; // Convert Sequelize instance to plain object
  } catch (err) {
    throw new Error(
      `Unable to retrieve event details for event ${eventId}: ${err.message}`
    );
  }
};

module.exports = { getEventIdsByUserId, getEventDetailsById };
