const eventsService = require("../services/eventsService");

const testGetEvents = async () => {
  const userID = "4";

  try {
    const events = await eventsService.getEventIdsByUserId(userID);
    console.log(events);
  } catch (err) {
    console.error(err.message);
  }
};

const testGetEventDetails = async () => {
  const eventID = "1";

  try {
    const eventDetails = await eventsService.getEventDetailsById(eventID);
    console.log(eventDetails);
  } catch (err) {
    console.error(err.message);
  }
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const runTests = async () => {
  await testGetEvents();
  await delay(1000); // Wait for 1 second
  await testGetEventDetails();
};

runTests();
