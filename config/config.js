const {Sequelize} = require('sequelize')



const sequelize = new Sequelize('crmdb', 'root', '', {
    host: '127.0.0.1',
    dialect: "mysql"
  });