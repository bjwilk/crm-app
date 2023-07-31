const sequelize = require('../config/config')
const Account = require('./Accounts')
const User = require('./Users')

User.hasOne(Account, {
    foreignKey: {
        // a `UserId` is the default foreign key that is also created
        name: 'myUserId'
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