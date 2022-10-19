'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  
  user.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    password: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return user;
};