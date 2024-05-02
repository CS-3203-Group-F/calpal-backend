const passport = require("../passport/passportConfig");
const authService = require('../services/authService');
const { emit } = require('nodemon');


// controller for user sign up takes a request and response object as arguments
const signUp = async (req, res) => {
  try {
    // destructure the email, password, firstName, and lastName from the request body
    const { email, password, firstName, lastName } = req.body;
    // call the createUser method from the authService with the email, password, firstName, and lastName as arguments
    await authService.createUser(email, password, firstName, lastName);
    // send a response with status code 201 and a message 'User created'
    res.status(201).send('User created');
  } catch (error) {
    // if an error occurs, send a response with status code 400 and the error message
    res.status(400).send(error.message);
  }
};

// controller for user sign in takes a request, response, and next object as arguments
const signIn = (req, res, next) => {
  // call the authenticate method from the passport object with the 'local' strategy and a callback function as arguments
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      // if an error occurs, send a response with status code 500 and the error message
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      // if the user is not found, send a response with status code 401 and the error message
      return res.status(401).json({ error: info.message || 'Login failed' });
    }
    // call the logIn method from the request object with the user and a callback function as arguments
    req.logIn(user, (err) => {
      if (err) {
        // if an error occurs, send a response with status code 500 and the error message
        return res.status(500).json({ error: err.message });
      }
      // send a response with status code 200, a message 'Login successful', and the user object
      return res.status(200).json({ message: 'Login successful', user: user });
    });
  })(req, res, next);
}

// controller for user sign out takes a request and response object as arguments
const signOut = (req, res) => {
  // call the logout method from the request object with a callback function as an argument
  req.logout(() => {
    res.redirect('/login');
  });
};

module.exports = { signUp, signIn, signOut };
