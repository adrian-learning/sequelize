//Arquivo para testar funções do sequelize
const {sequelize, posts, users} = require('./database/index')
const { DataTypes } = require('sequelize')




// user(sequelize,DataTypes).create({ name: 'User 01', password: 1234 })
// user(sequelize,DataTypes).create({ name: 'User 02', password: 4321 })

// user(sequelize,DataTypes).create({ name: 'User 03', password: 12345 })

async function a(){
    const post = await posts.findOne({where: {title: 'Post 01'}})
    const user = await users.findOne({where: { name: 'User 01'}})
    await user.addPost(post)
    //await user(sequelize, DataTypes).createPosts({title: 'Post 01', body: 'Post body 01'})
}

a()
// user(sequelize, DataTypes).createPost({title: 'Post 01', body: 'Post body 01'})
//posts(sequelize,DataTypes).createUsers({name: 'User teste', password: 0000})