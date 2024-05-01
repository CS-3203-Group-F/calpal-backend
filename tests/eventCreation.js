const eventsService = require("../services/eventsService");

// Define the event data
const eventData = {
  user_id: 3,
  title: "Tech Conference 2024",
  description:
    "Annual technology conference focusing on the latest trends in software development.",
  start: new Date("2024-05-15T09:00:00"),
  end: new Date("2024-05-17T17:00:00"),
  organizer: "Tech Innovators Inc.",
  allDay: false,
  color: "#FF5733",
};

const eventData1 = {
  user_id: 3,
  title: "Chess Enthusiasts Meetup",
  description:
    "A casual gathering for chess players of all skill levels to play, learn, and share strategies.",
  start: new Date("2024-05-11T15:00:00"),
  end: new Date("2024-05-11T18:00:00"),
  organizer: "City Chess Club",
  allDay: false,
  color: "#6A5ACD",
};

const eventData2 = {
  user_id: 3,
  title: "DIY Home Decor Workshop",
  description:
    "A creative workshop where participants can learn various DIY projects for home decor from experienced crafters.",
  start: new Date("2024-06-08T10:00:00"),
  end: new Date("2024-06-08T13:00:00"),
  organizer: "Crafty Hands Studio",
  allDay: false,
  color: "#FF6347",
};

const eventData3 = {
  user_id: 3,
  title: "Amateur Astronomy Night",
  description:
    "An evening under the stars, guided by astronomers, where enthusiasts can observe celestial phenomena and learn about the universe.",
  start: new Date("2024-07-20T20:00:00"),
  end: new Date("2024-07-20T23:00:00"),
  organizer: "Stargazers Society",
  allDay: false,
  color: "#483D8B",
};

// Call the createEvent function
eventsService
  .createEvent(eventData3)
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
