// Imports
const express = require('express'); 
const authController = require('../controllers/authController');
const router = express.Router();  // Create a new router object

// Define the routes for the authentication controller
router.post('/signup', authController.signUp); // Define the route for the sign-up controller
router.post('/login', authController.signIn); // Define the route for the log-in controller
router.get('/logout', authController.signOut); // Define the route for the log-out controller
router.get('/login', (req, res) => {
    console.log('login page');
    res.send('hello world');
}); // Define additional route for the login page that will be used to test authentication success

module.exports = router; // Export the router object
