// passport/localStrategy.js
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { verifyUser } = require("../services/authService"); // Import your verifyUser function


// Define a new LocalStrategy which us how Passport will authenticate users using a username and password
const localStrategy = new LocalStrategy(async (email, password, done) => {
  console.log("Local strategy called");
  try {
    // Call the verifyUser function from the authService with the email and password as arguments
    // This function should return the user object if the user is authenticated
    const user = await verifyUser(email, password);
    console.log(user);
    console.log("User verified");

    // If user authentication is successful, pass the user object to the next middleware
    return done(null, user);
  } catch (error) {
    // If authentication fails, pass an error to the next middleware
    return done(null, false, { message: error.message });
  }
});

module.exports = localStrategy;
