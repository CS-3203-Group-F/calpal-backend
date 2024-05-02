// services/userService.js
const bcrypt = require("bcrypt");
const db = require("../models/db");


// Create a new user in the database with the provided email, password, first name, and last name
const createUser = async (email, password, firstName, lastName) => {
  try {
    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user in the database using sqlize's create method with the provided data
    const user = await db.User.create({
      email: email,
      passwordhash: hashedPassword,
      first_name: firstName,
      last_name: lastName,
    });
    return user; // Return the Sequelize user object
  } catch (error) {
    console.error(error);
    throw new Error("Error creating user");
  }
};

// Verify the user with the provided email and password
const verifyUser = async (email, password) => {
  try {
    // Find the user in the database with the provided email using Sequelize's findOne method
    const user = await db.User.findOne({ where: { email: email } });
    // If the user exists and the password matches, return the user 
    if (user && (await user.comparePassword(password))) {
      return user; // Return the Sequelize user object
    } else {
      // if the user does not exist or the password does not match, throw an error
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    // If an error occurs, log the error and throw a new error
    throw new Error("Error verifying user");
  }
};


// Add a comparePassword method to the User model to compare the provided password with the user's password hash
db.User.prototype.comparePassword = function (password) {
  // Use bcrypt's compare method to compare the provided password with the user's password hash
  return bcrypt.compare(password, this.passwordhash); // ensure 'passwordhash' matches the database column
};

module.exports = { createUser, verifyUser };
