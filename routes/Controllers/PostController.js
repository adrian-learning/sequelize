const { Posts } = require('../../database')
const { Users } = require('../../database')

module.exports = {
    async getAllPosts (req,res) {
        try {
            const allPosts = await Posts.findAll({
                attributes: ['id','title','body']
            })
    
            return res.json(allPosts)
            
        } catch (error) {
            return res.json({error: `Failed to getPost -> Error: ${error}` })
        }
    },

    async getPostByUser (req,res){
        try {
            const { id } = req.params
            const user = await Users.findByPk(id)

            const posts = await user.getPosts({
                attributes: ['id','title', 'body'],
                joinTableAttributes: []
            })

            return res.json(posts)
        } catch (error) {
            return res.json({error: `Failed to getPostByUser -> Error: ${error}` })
        }
    },

    async postPosts (req,res){
        try {
            const {title, body, ownerId} = req.body
    
            const user = await Users.findByPk(ownerId)
    
            const postCreated = await user.createPost({title: title, body: body})
    
            return res.json(postCreated)
            
        } catch (error) {
            return res.json({error: `Failed to insertPost -> Error: ${error}` })
        }
    }
}