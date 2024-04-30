const db = require("../models/db");

const createEvent = async (eventData) => {
  try {
    const event = await db.Event.create({
      title: eventData.title,
      description: eventData.description,
      start_date: eventData.start_date,
      end_date: eventData.end_date,
      organizer: eventData.organizer,
    });
    // Create an entry in the UsersEvents table
    await event.addUser(eventData.user_id);
    return event.toJSON();
  } catch (err) {
    throw new Error(`Unable to create event: ${err.message}`);
  }
};

const editEventById = async (eventId, eventData) => {
  try {
    const event = await db.Event.findByPk(eventId);
    if (!event) {
      throw new Error(`Event with ID ${eventId} not found`);
    }

    const updatedEvent = await event.update(eventData);

    // Update the event properties if the corresponding fields are not empty
    // if (eventData.title) {
    //   event.title = eventData.title;
    // }
    // if (eventData.description) {
    //   event.description = eventData.description;
    // }
    // if (eventData.start_date) {
    //   event.start_date = eventData.start_date;
    // }
    // if (eventData.end_date) {
    //   event.end_date = eventData.end_date;
    // }
    // if (eventData.organizer) {
    //   event.organizer = eventData.organizer;
    // }

    // Save the updated event
    // await event.save();

    return event.toJSON();
  } catch (err) {
    throw new Error(`Unable to edit event with ID ${eventId}: ${err.message}`);
  }
};

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

module.exports = { createEvent, editEventById, getEventIdsByUserId, getEventDetailsById };
