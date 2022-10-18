const { Model, DataTypes } =  require('sequelize')
const sequelize = require('../database/index')

const user = sequelize.define('User',{
    name: DataTypes.STRING,
    password: DataTypes.STRING
})

module.exports = user