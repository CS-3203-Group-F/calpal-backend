const bcrypt = require('bcrypt');
const db = require('../models/db'); // Your database module
const User = require('../models/users');

const createUser = async (email, password, firstName, lastName) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  // Insert into your database and return the new user
  // This is simplified; make sure to handle errors and constraints
  const result = await db.query('INSERT INTO users (email, passwordhash, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *', [email, hashedPassword, firstName, lastName]);
  return User.fromJSON(result.rows[0]); // Return a json object which is a copy user we just created
};

const verifyUser = async (email, password) =>    {
  // Find user by email and verify password
  const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [email]);// Query the database for the user store this in rows if email is unique there should only be one row
  const user = rows[0];
  if (user && await bcrypt.compare(password, user.passwordhash)) { // If the user exists and the password is correct
    return  User.fromJSON(user);// Return the user object this will be used to create a session later
  } else {
    throw new Error('Invalid credentials'); // Throw an error if the user does not exist or the password is incorrect
  }
};

module.exports = { createUser, verifyUser };
