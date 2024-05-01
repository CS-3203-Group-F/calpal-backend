const eventsService = require("../services/eventsService");

// Define the event data
const eventData = {
  user_id: 4,
  title: 'Tech Conference 2024',
  description: 'Annual technology conference focusing on the latest trends in software development.',
  start: new Date('2024-05-15T09:00:00'),
  end: new Date('2024-05-17T17:00:00'),
  organizer: 'Tech Innovators Inc.',
  allDay: false,
  color: '#FF5733'
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
// eventsService
//   .editEventById(eventId, updatedEventData)
//   .then((updatedEvent) => {
//     console.log("Event updated:", updatedEvent);
//   })
//   .catch((error) => {
//     console.error("Error updating event:", error);
//   });
