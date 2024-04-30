const eventsService = require("../services/eventsService");

// Define the event data
const eventData = {
  user_id: 1,
  title: "Conference",
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
    setTimeout(() => {}, 1000); // Wait for the event to be created before updating it
  })
  .catch((error) => {
    console.error("Error creating event:", error);
  });

// Define the eventId
const eventId = 3; // Replace with the actual event ID

// Define the updated eventData
const updatedEventData = {
  title: "New Event",
};

// Call the editEventById function
eventsService
  .editEventById(eventId, updatedEventData)
  .then((updatedEvent) => {
    console.log("Event updated:", updatedEvent);
  })
  .catch((error) => {
    console.error("Error updating event:", error);
  });
