const authService = require('../services/auth.service')

const authController = async (request, response) => {

    // Ejectuar el servicio
    const login = await authService(request)

    // respuesta al front
    if(login.status === 401){
        return await response.status(401).json(login)
    }

    response.json({message: "Login exitoso"}) // 201 created
}

module.exports = authController;