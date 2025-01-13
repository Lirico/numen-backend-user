const createUserService = require('../services/user.service')




const createUserController = async (request, response) => {
    const newUser = await createUserService(request)

    response.json(newUser)
}

module.exports = createUserController;