const Sequelize = require('sequelize')
const sequelize = new Sequelize('jacee_ufes', 'root', 'root',{
  host: 'db',
  dialect: 'mysql',
  operatorAliases: false,
})

module.exports = sequelize
