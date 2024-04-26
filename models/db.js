// config/database.js

const { Sequelize } = require('sequelize');
require('dotenv').config();
const userModel = require('./users');

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

// Define the models
const db = {
  sequelize,
  users: userModel(sequelize)
};

sequelize.sync(); // Sync all models with the database

module.exports = db;
