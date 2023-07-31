const sequelize = require('../config/config.js')
const { DataTypes, Model, Sequelize } = require('sequelize');
passportLocalSequelize = require('passport-local-sequelize');


class User extends Model { }

User.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userName: {
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
  },
  email: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  password: {
    type: DataTypes.STRING

  },
  position: {
    type: DataTypes.STRING
  },
  hashField: {
    type: DataTypes.STRING
  },
  saltField: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

passportLocalSequelize.attachToUser(User, {
	userName: 'nick',
	hashField: 'myhash',
	saltField: 'mysalt'
});

module.exports = User;