'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    static a = 0
    static associate(models) {
      console.log(models)
      this.belongsToMany(models.Users,{ foreignKey: 'postId', through: 'UserPosts', as: 'User'})
    }
  }

  Posts.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posts',
  });
  
  return Posts;
};