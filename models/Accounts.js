const sequelize = require('../config/config.js')
const { Sequelize, DataTypes } = require('sequelize');


class Accounts extends Model {}

Accounts.init({
  // Model attributes are defined here
  businessType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastfleetSizeName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  equipmentType: {
    type: DataTypes.STRING

  },
  lookingFor: {
    type: DataTypes.STRING
  },
  lastPurchased: {
    type: DataTypes.STRING
  },
  userId: {
    type: DataTypes.STRING
  },
  acctId: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Accounts' // We need to choose the model name
});

module.exports = Accounts;