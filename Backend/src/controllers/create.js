const User = require ('../../models/user')


const createUser = async (req, res) => {
    try {
        await User.create(req.body)

        
    } catch (error) {
        console.log(error)
        
    }

}

module.exports = createUser;