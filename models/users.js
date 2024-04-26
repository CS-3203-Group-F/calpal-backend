// models/User.js
const { DataTypes, Model } = require('sequelize');
const db = require('./db');
class User extends Model {}

function userModel(sequelize) {

  const user = User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });

  return user;
}

module.exports = userModel;
