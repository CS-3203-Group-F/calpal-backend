const { DataTypes } = require("sequelize");

module.exports = eventModel;

function eventModel(sequelize) {
  const attributes = {
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
    start: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    organizer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    allDay: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  };

  const options = {
    timestamps: false,
  };

  return sequelize.define("Event", attributes, options);
}
