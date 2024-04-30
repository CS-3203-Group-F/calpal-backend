const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("./db.js"); // make sure this is your configured Sequelize instance

class UsersEvent extends Model {}
UsersEvent.init(
  {
    user_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "UsersEvents",
    timestamps: false, // assuming you don't want Sequelize to automatically add timestamp fields for createdAt and updatedAt
  }
);

module.exports = UsersEvent;
