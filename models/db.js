const { Sequelize } = require("sequelize");
const eventModel = require("./events");
const userModel = require("./users");

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

const db = {};
db.Event = eventModel(sequelize);
db.User = userModel(sequelize);

//Define associations
db.User.belongsToMany(db.Event, {
  through: "UsersEvents",
  foreignKey: "user_id",
  otherKey: "event_id",
});
db.Event.belongsToMany(db.User, {
  through: "UsersEvents",
  foreignKey: "event_id",
  otherKey: "user_id",
});

sequelize.sync({ force: false });
// Export the Sequelize instance for use in other modules
module.exports = db;
