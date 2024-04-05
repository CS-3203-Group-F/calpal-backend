const passport = require('passport');
const authService = require('../services/authService');

const signUp = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    await authService.createUser(email, password, firstName, lastName);
    res.redirect('/login');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const signIn = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
});

const signOut = (req, res) => {
  req.logout(() => {
    res.redirect('/login');
  });
};

module.exports = { signUp, signIn, signOut };
