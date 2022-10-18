const { Model, DataTypes } =  require('sequelize')
const sequelize = require('../database/index')

const user = sequelize.define('User',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: '^[0-9]{4}$'  //Apenas 4 numeros
    }
})