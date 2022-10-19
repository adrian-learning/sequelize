const { Users } = require('../../database/index')

module.exports = {
    async getUsers (req,res) {
        try {
            const allUsers = await Users.findAll({
                attributes: ['id','name','password']
            })
    
            return res.json(allUsers)
            
        } catch (error) {
            return res.json({error: `Failed to getUsers -> Error: ${error}` })
        }
    },

    async postUser (req,res){
        try {
            const {username, password} = req.body
    
            const userCreated = await Users.create({name: username, password: password})
            
            return res.json(userCreated)
            
        } catch (error) {
            return res.json({error: `Failed to insertUser -> Error: ${error}` })
        }

    }
}