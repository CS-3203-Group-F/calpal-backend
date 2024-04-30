const { Model, DataTypes } = require("sequelize");
const db = require("./db.js"); // assuming db.js is in the same directory

class Event extends Model {}

Event.init(
  {
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // This ensures it behaves as a serial field
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    organizer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db.sequelize,
    modelName: "Event",
    timestamps: false, // assuming you don't want Sequelize to automatically add timestamp fields for createdAt and updatedAt
  }
);

module.exports = Event;
