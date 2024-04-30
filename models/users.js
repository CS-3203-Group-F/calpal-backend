const { Model, DataTypes } = require("sequelize");
const {sequelize} = require("./db.js"); // assuming db.js is in the same directory

class User extends Model {}

User.init(
  {
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
  },
  {
    sequelize,
    modelName: "User",
    timestamps: false, // assuming you don't want Sequelize to automatically add timestamp fields for createdAt and updatedAt
  }
);

module.exports = User;
