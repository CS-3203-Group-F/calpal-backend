const db = require("../models/db");

const getEventIdsByUserId = async (userId) => {
  try {
    // Fetch the user with associated events
    const userWithEvents = await db.User.findByPk(userId, {
      include: [
        {
          model: db.Event,
          attributes: [], // No need to fetch actual event data here
          through: {
            attributes: ["event_id"], // Fetch only the EventId from the join table
          },
        },
      ],
    });

    if (!userWithEvents) {
      throw new Error("User not found");
    }

    // Map through the events to extract only the event IDs
    const eventIds = userWithEvents.Events.map(
      (event) => event.UsersEvents.event_id
    );
    return eventIds;
  } catch (err) {
    console.log(err);
    throw new Error(
      `Unable to retrieve event IDs for user ${userId}: ${err.message}`
    );
  }
};

const getEventDetailsById = async (eventId) => {
  try {
    const event = await db.Event.findOne({
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
