// passport/localStrategy.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { verifyUser } = require('../services/authService'); // Import your verifyUser function

const localStrategy = new LocalStrategy(async (email, password, done) => {
    console.log('Local strategy called');
  try {
    const user = await verifyUser(email, password);
    console.log(user);
    console.log('User verified');

    // If user authentication is successful, pass the user object to the next middleware
    return done(null, user);
  } catch (error) {
    // If authentication fails, pass an error to the next middleware
    return done(null, false, { message: error.message });
  }
});

module.exports = localStrategy;