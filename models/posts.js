'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    static associate(models) {
      this.belongsToMany(models.Users,{ foreignKey: 'postId', through: 'UserPosts', as: 'Users'})
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