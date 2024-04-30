const { Sequelize } = require("sequelize");

// Load environment variables
require("dotenv").config();

// Create a new Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres", // specifying the dialect
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    port: process.env.DB_PORT,
    logging: true, // you can turn on logging by setting it to true
  }
);


const db = {
  sequelize,
};

// Export the Sequelize instance for use in other modules
module.exports = db;
