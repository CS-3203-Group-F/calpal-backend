// passport/localStrategy.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { verifyUser } = require('../services/authService'); // Import your verifyUser function

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await verifyUser(username, password);

    // If user authentication is successful, pass the user object to the next middleware
    return done(null, user);
  } catch (error) {
    // If authentication fails, pass an error to the next middleware
    return done(null, false, { message: error.message });
  }
}));
