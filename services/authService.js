// services/userService.js
const bcrypt = require("bcrypt");
const db = require("../models/db");

const createUser = async (email, password, firstName, lastName) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
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

const verifyUser = async (email, password) => {
  try {
    const user = await db.User.findOne({ where: { email: email } });
    if (user && (await user.comparePassword(password))) {
      return user; // Return the Sequelize user object
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    throw new Error("Error verifying user");
  }
};

db.User.prototype.comparePassword = function (password) {
  return bcrypt.compare(password, this.passwordhash); // ensure 'passwordhash' matches the database column
};

module.exports = { createUser, verifyUser };
