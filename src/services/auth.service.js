const User = require('../models/user.model')
const crypt = require('bcryptjs');
const generateJWT = require('../utils/generateJWT');

const authService = async (request) => {
    // Necesito el email del user registrado en cuestion 
    //   -> Para poder loguearme necesito primero encontrar en la BD el usuario registrado
    //   -> Por que necesito el email para esto?
    // Necesito el password ...

    // El user al intentar loguearse llena un formulario
    const {email, password} = request.body

    const user = await User.findOne({email})

    if(!user){
        return { status: 401, message: "Usuario o contrasenia invalidos."}
    }

    const validatePassword = crypt.compareSync(password, user.password)

    if(!validatePassword){
        return { status: 401, message: "Usuario o contrasenia invalidos."}
    }

    const token = generateJWT(email)

    console.log(token)

    return token;
}


module.exports = authService;