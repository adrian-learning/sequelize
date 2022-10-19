const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')['development']
const Posts = require('../models/posts')
const Users = require('../models/user')

const sequelize = new Sequelize(config.database, config.username, config.password, config)

//Inicia e criar os associations
const posts = Posts(sequelize, DataTypes)
const users = Users(sequelize, DataTypes)

posts.associate(sequelize.models)
users.associate(sequelize.models)

posts.a = 10
module.exports = {
    sequelize,
    Posts: posts,
    Users: users
}

