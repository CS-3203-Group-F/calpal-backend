const eventsService = require("../services/eventsService");
const groupsService = require("../services/groupsService");

// Define the test group data
const groupData = {
  group_name: "Astronomy Club",
  group_description:
    "A group for astronomy enthusiasts to share knowledge and stargazing experiences.",
  group_owner: "Owner",
  group_color: "#FF5733",
  image: "",
  isPrivate: false,
};

// Define the test event data
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
  location: "Convention Center, 123 Main Street, City, State",
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
  location: "Crafty Hands Studio, 123 Main Street, City, State",
};

const eventData3 = {
  user_id: 3,
  group_id: 1,
  title: "Amateur Astronomy Night",
  description:
    "An evening under the stars, guided by astronomers, where enthusiasts can observe celestial phenomena and learn about the universe.",
  start: new Date("2024-07-20T20:00:00"),
  end: new Date("2024-07-20T23:00:00"),
  organizer: "Stargazers Society",
  allDay: false,
  color: "#483D8B",
  location: "City Observatory, 456 Observatory Road, City, State",
};

// Call the createGroup function with the test groupData
groupsService.createGroup(groupData).then((createdGroup) => {
  console.log("Group created:", createdGroup);
  setTimeout(() => {}, 1000); // Wait for the group to be created before creating the event
});

// Call the createEvent function
eventsService
  .createEvent(eventData)
  .then((createdEvent) => {
    console.log("Event created:", createdEvent); // Log the created event
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

// Call the editEventById function with the eventId and updated eventData
eventsService
  .editEventById(eventId, updatedEventData)
  .then((updatedEvent) => {
    console.log("Event updated:", updatedEvent); // Log the updated event
  })
  .catch((error) => {
    console.error("Error updating event:", error);
  });
