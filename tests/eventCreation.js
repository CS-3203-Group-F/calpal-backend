const eventsService = require("../services/eventsService");

// Define the event data
const eventData = {
  user_id: 1,
  title: "My Event",
  description: "This is a test event",
  start_date: "2022-01-01",
  end_date: "2022-01-01",
  organizer: "Some Organizer",
};

// Call the createEvent function
eventsService
  .createEvent(eventData)
  .then((createdEvent) => {
    console.log("Event created:", createdEvent);
  })
  .catch((error) => {
    console.error("Error creating event:", error);
  });

// Define the eventId
const eventId = 4; // Replace with the actual event ID

// Define the updated eventData
const updatedEventData = {
  title: "Updated Event",
};

// Call the editEventById function
eventsService
  .editEventById(eventId, eventData)
  .then((updatedEvent) => {
    console.log("Event updated:", updatedEvent);
  })
  .catch((error) => {
    console.error("Error updating event:", error);
  });
