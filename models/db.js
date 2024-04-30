const { Sequelize } = require("sequelize");
const eventModel = require("./events");
const userModel = require("./users");
const groupsModel = require("./groups");
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
db.Groups =groupsModel(sequelize);

//Define associations

//Users to ...
db.User.belongsToMany(db.Event, {
  through: "UsersEvents",
  foreignKey: "user_id",
  otherKey: "event_id",
});
db.User.belongsToMany(db.Groups, {
  through: "UsersGroups",
  foreignKey: "user_id",
  otherKey: "group_id",
});

// Events to ...
db.Event.belongsToMany(db.User, {
  through: "UsersEvents",
  foreignKey: "event_id",
  otherKey: "user_id",
});
db.Event.belongsTo(db.Groups, {
  through: "EventsGroups",
  foreignKey: "event_id",
  otherKey: "group_id",
});


sequelize.sync({ force: true });
// Export the Sequelize instance for use in other modules
module.exports = db;
