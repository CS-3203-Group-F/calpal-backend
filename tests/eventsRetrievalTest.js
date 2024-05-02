const eventsService = require("../services/eventsService");

// Test the getEventIdsByUserId and getEventDetailsById functions
const testGetEvents = async () => {
  // Test data for getting events by user ID
  const userID = "4";

  try {
    const events = await eventsService.getEventIdsByUserId(userID); // Call the getEventIdsByUserId function from the eventsService module
    console.log(events); // Log the events
  } catch (err) {
    console.error(err.message);
  }
};

const testGetEventDetails = async () => {
  // Test data for getting event details by event ID
  const eventID = "1";

  try {
    const eventDetails = await eventsService.getEventDetailsById(eventID); // Call the getEventDetailsById function from the eventsService module
    console.log(eventDetails); // Log the event details
  } catch (err) {
    console.error(err.message);
  }
};

// Function to delay execution ensuring that the getEventIdsByUserId function is called before the getEventDetailsById function
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Run the tests
const runTests = async () => {
  await testGetEvents();
  await delay(1000); // Wait for 1 second
  await testGetEventDetails();
};

runTests();
