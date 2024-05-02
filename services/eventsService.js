const db = require("../models/db");

// Create a new event in the database with the provided event data
const createEvent = async (eventData) => {
  try {
    // Create a new event in the database using Sequelize's create method with the provided data
    // store the created event in a variable
    const event = await db.Event.create({
      title: eventData.title,
      description: eventData.description,
      start: eventData.start,
      end: eventData.end,
      organizer: eventData.organizer,
      allDay: eventData.allDay,
      color: eventData.color,
      location: eventData.location,
    });
    // Create associations between the event and the user and group
    await event.addUser(eventData.user_id);
    await event.addGroup(eventData.group_id);
    // Return the Sequelize event object as a JSON object
    return event.toJSON();
  } catch (err) {
    // If an error occurs, log the error and throw a new error
    throw new Error(`Unable to create event: ${err.message}`);
  }
};

// Edit an existing event in the database with the provided event ID and event data
const editEventById = async (eventId, eventData) => {
  try {
    // Find the event in the database with the provided ID using Sequelize's findByPk method
    const event = await db.Event.findByPk(eventId);
    if (!event) {
      // If the event does not exist, throw an error
      throw new Error(`Event with ID ${eventId} not found`);
    }
    // Update the event with the provided data using Sequelize's update method
    const updatedEvent = await event.update(eventData);

    // Return the updated event as a JSON object
    return event.toJSON();
  } catch (err) {
    // If an error occurs, log the error and throw a new error
    throw new Error(`Unable to edit event with ID ${eventId}: ${err.message}`);
  }
};

// Get event IDs associated with a user ID
const getEventIdsByUserId = async (userId) => {
  try {
    // Fetch the user with associated events
    const userWithEvents = await db.User.findByPk(userId, {
      // Include the Event model and fetch only the event_id
      include: [
        {
          model: db.Event,
          attributes: ["event_id"],
          through: {
            attributes: ["event_id"], // Fetch only the EventId from the join table
          },
        },
      ],
    });

    // If the user is not found, throw an error
    if (!userWithEvents) {
      throw new Error("User not found");
    }
    console.log(userWithEvents);
    // Map through the events to extract only the event IDs
    const eventIds = userWithEvents.Events.map(
      (event) => event.UsersEvents.event_id
    );
    // Return the event IDs
    return eventIds;
  } catch (err) {
    console.log(err);
    // If an error occurs, log the error and throw a new error
    throw new Error(
      `Unable to retrieve event IDs for user ${userId}: ${err.message}`
    );
  }
};

// Get event details by event ID
const getEventDetailsById = async (eventId) => {
  try {
    // Find the event in the database with the provided ID using Sequelize's findOne method
    const event = await db.Event.findOne({
      where: { event_id: eventId }, // ensure the primary key on your Event model is 'id' or adjust accordingly
    });
    return event ? event.toJSON() : null; // Convert Sequelize instance to plain object
  } catch (err) {
    // If an error occurs, log the error and throw a new error
    throw new Error(
      `Unable to retrieve event details for event ${eventId}: ${err.message}`
    );
  }
};

module.exports = {
  createEvent,
  editEventById,
  getEventIdsByUserId,
  getEventDetailsById,
};
