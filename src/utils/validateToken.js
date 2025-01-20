const jwt = require('jsonwebtoken');
require('dotenv').config()

const validateToken = async (request, response, next) => {
    const token = request.header('Authorization');

    if(!token){
        return response.status(404).json({message: 'Token no encontrado'});
    }

    try {
       const {email} = jwt.verify(token, process.env.SECRET_KEY); // Extrae el email ¿Por que extra el email? Por que es lo que necesita para loggearse.

       request.email = email;
       next();
    } catch (error) {
        return response.status(401).json({message: 'Token invalido'});
    }
}

module.exports = validateToken;