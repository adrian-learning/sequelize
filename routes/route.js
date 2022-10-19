const { Router } = require('express')
const router = Router()

const UserController = require('./Controllers/UserController')
const PostController = require('./Controllers/PostController')

router.get('/user', UserController.getUsers)
router.post('/user', UserController.postUser)

router.get('/post', PostController.getAllPosts)
router.get('/post/:id', PostController.getPostByUser)
router.post('/post', PostController.postPosts)

module.exports = router