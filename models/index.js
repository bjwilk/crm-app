const sequelize = require('../config/config')
const Account = require('./Accounts')
const User = require('./Users')

User.hasOne(Account, {
    foreignKey: {
    }
})
Account.belongsTo(User)

const syncTable = async () => {
    await sequelize.sync();
    console.log("Tables Synched!!")
}

module.exports = {
    syncTable,
    Account,
    User
}