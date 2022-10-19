'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    
    static associate(models) {
      this.belongsToMany(models.Posts, { foreignKey: 'userId', through: 'UserPosts', as: 'Post' })
    }
  }
  
  Users.init({
    name: DataTypes.STRING,
    password: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};