const { DataTypes } = require("sequelize");

module.exports = userModel;

function userModel(sequelize) {
  const attributes = {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // This ensures it behaves as a serial field
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passwordhash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  const options = {
    timestamps: false,
  };

  return sequelize.define("User", attributes, options);
}
