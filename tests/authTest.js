const authService = require("../services/authService.js"); // Path to your authService module

// Test the createUser and verifyUser functions

const testCreateUser = async () => {
  // Test data for creating a new user
  const email = "caleb.m.baade-1@ou.edu";
  const password = "password123";
  const firstName = "Caleb";
  const lastName = "Baade";

  // Call the createUser function from the authService module
  try {
    const user = await authService.createUser(
      email,
      password,
      firstName,
      lastName
    );
    console.log(user); // Log the user object
  } catch (err) {
    console.error(err.message);
  }
};

const testVerifyUser = async () => {
  // Test data for verifying an existing user
  const email = "caleb.m.baade-1@ou.edu";
  const password = "password123";

  // Call the verifyUser function from the authService module
  try {
    const user = await authService.verifyUser(email, password);
    console.log(user); // Log the user object
    console.log("User verified"); // Log a success message
  } catch (err) {
    console.error(err.message);
  }
};

// Function to delay execution ensuring that the createUser function is called before the verifyUser function
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Run the tests
const runTests = async () => {
  await testCreateUser();
  await delay(1000); // Wait for 1 second
  await testVerifyUser();
};

runTests();
