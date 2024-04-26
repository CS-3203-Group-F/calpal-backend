// config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Create a Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_DATABASE, // database
  process.env.DB_USER, // username
  process.env.DB_PASSWORD, // password
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres', // Assuming you're using PostgreSQL
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // You may need to set this to true in production depending on your database configuration
      }
    }
  }
);

module.exports = sequelize;
