const db = require("../models/db");

const EventIdsByUserId = async (userId) => {
  const query = `
    SELECT ue.event_id FROM users_events ue
    WHERE ue.user_id = $1;
  `;

  try {
    const result = await db.query(query, [userId]);
    return result.rows; // This will be an array of objects with event_id as a key
  } catch (err) {
    throw new Error(
      `Unable to retrieve event IDs for user ${userId}: ${err.message}`
    );
  }
};

const EventDetailsById = async (eventId) => {
  const query = `
    SELECT * FROM events
    WHERE id = $1;
  `;

  try {
    const result = await db.query(query, [eventId]);
    return result.rows[0]; // This will be an object with all the event details
  } catch (err) {
    throw new Error(
      `Unable to retrieve event details for event ${eventId}: ${err.message}`
    );
  }
};

module.exports = { EventIdsByUserId };
