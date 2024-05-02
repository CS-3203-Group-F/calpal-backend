// Imports
const { Sequelize } = require("sequelize"); // Import the Sequelize class
const eventModel = require("./events");
const userModel = require("./users");
const groupsModel = require("./groups");

require("dotenv").config(); // Load environment variables

// Create a new Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_DATABASE, // database name
  process.env.DB_USER, // database username
  process.env.DB_PASSWORD, // database password
  {
    host: process.env.DB_HOST, // database host
    dialect: "postgres", // database dialect
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    }, // enable SSL
    port: process.env.DB_PORT, // database port
    logging: true, // monitor each SQL query
  }
);

const db = {}; // Create an empty object to store the Sequelize instance
db.Event = eventModel(sequelize); // Create the Event model
db.User = userModel(sequelize); // Create the User model
db.Group = groupsModel(sequelize); // Create the Group model

//Define associations (these are different join tables that connect the models together)
// A user can have many events and an event can have many users (many-to-many relationship)
db.User.belongsToMany(db.Event, {
  through: "UsersEvents", // join table
  foreignKey: "user_id", // foreign key in the join table
  otherKey: "event_id", // other key in the join table
});

db.Event.belongsToMany(db.User, {
  through: "UsersEvents", // join table
  foreignKey: "event_id", // foreign key in the join table
  otherKey: "user_id", // other key in the join table
});

// A user can have many groups and a group can have many users (many-to-many relationship)
db.User.belongsToMany(db.Group, {
  through: "UsersGroups", // join table
  foreignKey: "user_id", // foreign key in the join table
  otherKey: "group_id", // other key in the join table
});

db.Group.belongsToMany(db.User, {
  through: "UsersGroups", // join table
  foreignKey: "group_id", // foreign key in the join table
  otherKey: "user_id", // other key in the join table
});

// A group can have many events and an event can have many groups (many-to-many relationship)
db.Event.belongsToMany(db.Group, {
  through: "EventsGroups", // join table
  foreignKey: "event_id", // foreign key in the join table
  otherKey: "group_id", // other key in the join table
});

db.Group.belongsToMany(db.Event, {
  through: "EventsGroups", // join table
  foreignKey: "group_id", // foreign key in the join table
  otherKey: "event_id", // other key in the join table
});

sequelize.sync({ force: false }); // Sync all models with the database, force: true will drop the table if it already exists

// Export the Sequelize instance for use in other modules
module.exports = db;
