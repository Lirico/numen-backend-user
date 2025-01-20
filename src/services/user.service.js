const User = require('../models/user.model')
const crypt = require('bcryptjs');



const createUserService = async (request, response) => {
    const newUser = request.body

    try {
        const encodedPassword = crypt.hashSync(newUser.password)

        newUser.password = encodedPassword

        const newUserEncoded = new User(newUser)

        await newUserEncoded.save()

        return { message: "Usuario creado con exito", statusCode: 201}
    } catch (error) {
        return { message: "Ocurrio un error", statusCode: 400}
    }
}


module.exports = createUserService;


