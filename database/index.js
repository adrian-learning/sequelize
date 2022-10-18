const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('firstdb', 'adrianewey', 'google123',{
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
})

module.exports = sequelize

