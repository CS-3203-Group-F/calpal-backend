const { DataTypes } = require("sequelize"); // Import the DataTypes object from sequelize

module.exports = userModel; // Export the userModel function

// Define the userModel function
function userModel(sequelize) {
  // Define the attributes of the User model
  const attributes = {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // This ensures it behaves as a serial field
    }, // Define the primary key
    email: {
      type: DataTypes.STRING,
      allowNull: false, // This ensures the email is required
      unique: true, // This ensures the email is unique
    }, // Define the email attribute
    passwordhash: {
      type: DataTypes.STRING,
      allowNull: false,
    }, // Define the password hash attribute
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, // Define the first name attribute
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, // Define the last name attribute
  };

  const options = {
    timestamps: false,
  }; // Disable timestamps

  // Define the User model with the attributes and options
  return sequelize.define("User", attributes, options);
}
