const bcrypt = require('bcryptjs');
const db = require('../db'); // Your database module
const User = require('../models/User');

const createUser = async (email, password, firstName, lastName) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  // Insert into your database and return the new user
  // This is simplified; make sure to handle errors and constraints
  const result = await db.query('INSERT INTO users (email, passwordhash, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *', [email, hashedPassword, firstName, lastName]);
  return new User(result.rows[0]);
};

const verifyUser = async (email, password) =>    {
  // Find user by email and verify password
  const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  const user = rows[0];
  if (user && await bcrypt.compare(password, user.password)) {
    return new User(user);
  } else {
    throw new Error('Invalid credentials');
  }
};

module.exports = { createUser, verifyUser };
