const authService = require("../services/authService.js"); // Path to your authService module

const testCreateUser = async () => {
  const email = "caleb.m.baade-1@ou.edu";
  const password = "password123";
  const firstName = "Caleb";
  const lastName = "Baade";

  try {
    const user = await authService.createUser(
      email,
      password,
      firstName,
      lastName
    );
    console.log(user);
  } catch (err) {
    console.error(err.message);
  }
};
const testVerifyUser = async () => {
  const email = "caleb.m.baade-1@ou.edu";
  const password = "password123";

  try {
    const user = await authService.verifyUser(email, password);
    console.log(user);
    console.log("User verified");
  } catch (err) {
    console.error(err.message);
  }
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const runTests = async () => {
  await testCreateUser();
  await delay(1000); // Wait for 1 second
  await testVerifyUser();
};

runTests();
