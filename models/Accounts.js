const sequelize = require('../config/config.js')
const { DataTypes, Model } = require('sequelize');


class Account extends Model { }

Account.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  businessType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fleetSize: {
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
    type: DataTypes.DATE,
    allowNull: true
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Account' // We need to choose the model name
});

module.exports = Account;