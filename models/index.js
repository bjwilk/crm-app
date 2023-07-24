const sequelize = require('../config/config')
const Accounts = require('./Accounts')
const Users = require('./Users')

Users.hasOne(Accounts)
Accounts.belongsTo(Users)