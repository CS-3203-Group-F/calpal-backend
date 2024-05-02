const { DataTypes } = require("sequelize"); // Import the DataTypes object from sequelize

module.exports = eventModel; // Export the eventModel function

// Define the eventModel function
function eventModel(sequelize) {
  // Define the attributes of the Event model
  const attributes = {
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // This ensures it behaves as a serial field
    }, // Define the primary key
    title: {
      type: DataTypes.STRING,
      allowNull: false, // This ensures the title is required
    }, // Define the title attribute
    description: {
      type: DataTypes.TEXT,
      allowNull: true, // This allows the description to be null
    }, // Define the description attribute
    start: {
      type: DataTypes.DATE,
      allowNull: false,
    }, // Define the start date attribute
    end: {
      type: DataTypes.DATE,
      allowNull: false,
    }, // Define the end date attribute
    organizer: {
      type: DataTypes.STRING,
      allowNull: true,
    }, // Define the organizer attribute
    allDay: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }, // Define the allDay attribute
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    }, // Define the color attribute
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    }, // Define the location attribute
  };

  const options = {
    timestamps: false,
  }; // Disable timestamps

  // Define the Event model with the attributes and options
  return sequelize.define("Event", attributes, options);
}
