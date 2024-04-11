const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.signOut);

module.exports = router;
