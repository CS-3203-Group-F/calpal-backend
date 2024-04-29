const passport = require('passport');
const authService = require('../services/authService');
const { emit } = require('nodemon');

const signUp = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    await authService.createUser(email, password, firstName, lastName);
    res.redirect('/login');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const signIn = async (req, res) => {
  try {

    const email = req.body.email;
    const password = req.body.password;
    const user = await authService.verifyUser(email, password);
    res.status(200);
    return res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error.message);
  
  }
   
};


const signOut = (req, res) => {
  req.logout(() => {
    res.redirect('/login');
  });
};

module.exports = { signUp, signIn, signOut };
