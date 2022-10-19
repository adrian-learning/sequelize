//Arquivo para testar funções do sequelize
const sequelize = require('./database/index')
const { DataTypes } = require('sequelize')
const user = require('./models/user')


user(sequelize,DataTypes).create({ name: 'User 01', password: 1234 })
user(sequelize,DataTypes).create({ name: 'User 02', password: 4321 })

user(sequelize,DataTypes).create({ name: 'User 03', password: 12345 })

