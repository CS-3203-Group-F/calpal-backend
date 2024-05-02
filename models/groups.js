const { DataTypes } = require("sequelize"); // Import the DataTypes object from sequelize

module.exports = groupModel; // Export the groupModel function

// Define the groupModel function
function groupModel(sequelize) {
  // Define the attributes of the Group model
  const attributes = {
    group_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // This ensures it behaves as a serial field
    }, // Define the primary key
    group_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // This ensures the group name is unique
    }, // Define the group name attribute
    group_description: {
      type: DataTypes.TEXT,
      allowNull: true, // This allows the group description to be null
    }, // Define the group description attribute
    group_owner: {
      type: DataTypes.STRING,
      allowNull: true,
    }, // Define the group owner attribute
    group_color: {
      type: DataTypes.STRING,
      allowNull: true,
    }, // Define the group color attribute
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    }, // Define the image attribute
    isPrivate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, // This ensures the default value is false
    }, // Define the isPrivate attribute
  };

  const options = {
    timestamps: false,
  }; // Disable timestamps

  // Define the Group model with the attributes and options
  return sequelize.define("Group", attributes, options);
}
