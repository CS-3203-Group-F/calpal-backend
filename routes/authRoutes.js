const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.signOut);

router.get('/login', (req, res) => {
    console.log('login page');
    res.send('hello world');
});

module.exports = router;
