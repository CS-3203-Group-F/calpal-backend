const { Pool } = require("pg");

// Load environment variables
require("dotenv").config();

// Create a new pool instance
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
});

// Export the pool for use in other modules
module.exports = pool;
