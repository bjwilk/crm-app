const sequelize = require('../config/config.js')
const { Sequelize, DataTypes } = require('sequelize');


class Users extends Model {}

Users.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING

  },
  password: {
    type: DataTypes.STRING
  },
  occupation: {
    type: DataTypes.STRING
  },
  userId: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Users' // We need to choose the model name
});

module.exports = Users;