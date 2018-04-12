const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')

const User = sequelize.define('user',{
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
})

module.exports = User
