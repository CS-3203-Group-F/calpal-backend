const passport = require("../passport/passportConfig");
const authService = require('../services/authService');
const { emit } = require('nodemon');

const signUp = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    await authService.createUser(email, password, firstName, lastName);
    res.status(201).send('User created');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const signIn = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      return res.status(401).json({ error: info.message || 'Login failed' });
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.status(200).json({ message: 'Login successful', user: user });
    });
  })(req, res, next);
}


const signOut = (req, res) => {
  req.logout(() => {
    res.redirect('/login');
  });
};

module.exports = { signUp, signIn, signOut };
