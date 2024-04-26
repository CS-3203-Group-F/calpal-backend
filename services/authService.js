// services/userService.js
const bcrypt = require('bcrypt');
const db = require('../models/db');
const User = db.users;

console.log(User);  

const createUser = async (email, password, firstName, lastName) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      passwordHash: hashedPassword,
      firstName,
      lastName
    });
    return user; // Return the Sequelize user object
  } catch (error) {
    console.error(error);
    throw new Error('Error creating user');
  }
};

const verifyUser = async (email, password) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (user && await user.comparePassword(password)) {
      return user; // Return the Sequelize user object
    } else {
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    throw new Error('Error verifying user');
  }
};

module.exports = { createUser, verifyUser };
