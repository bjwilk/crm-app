const sequelize = require('../config/config')
const Account = require('./Accounts')
const User = require('./Users')

User.hasOne(Account, {
    foreignKey: {
    }
})
Account.belongsTo(User)
Account.sync()
const syncTable = async () => {
    await sequelize.sync({force: false});
    console.log("Tables Synched!!")
}

module.exports = {
    syncTable,
    Account,
    User
}


// mysql -u root -p crmdb ./seeds3.sql
