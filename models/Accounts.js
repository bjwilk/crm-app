const sequelize = require('../config/config.js')
const { DataTypes, Model } = require('sequelize');


class Account extends Model { }

Account.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    businessType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fleetSize: {
      // type: DataTypes.ARRAY(DataTypes.STRING), // Use ARRAY for array types
      type: DataTypes.INTEGER,
      allowNull: true, // allowNull defaults to true, so you can omit this line
    },
    equipmentType: {
      // type: DataTypes.ARRAY(DataTypes.STRING),
      type: DataTypes.STRING,
      allowNull: true,
    },
    lookingFor: {
      // type: DataTypes.ARRAY(DataTypes.STRING),
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastPurchased: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize, // Associate the model with your Sequelize instance
    modelName: 'Account', // Set the model name
    // Other options and hooks can be added here
  }
);

// Export the model
module.exports = Account;