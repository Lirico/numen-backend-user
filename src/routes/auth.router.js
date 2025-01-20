const express = require('express');
const authRouter = express.Router();
const { check } = require('express-validator')
const validatorMiddleware = require('../utils/validator')
const authController = require('../controllers/auth.controller');
const validateToken = require('../utils/validateToken');

// Consultar a la DB para poder loguearnos. 
/* 
    ¿Que queremos consultar?
    Paso un username, quiero saber si existe
    Paso un password, quiero saber si existe
    etc etc etc

    Para ello necesito una ruta POST aunque no sea una insercion o creacion.
    El POST tambien sirve para enviar datos para consultar.

    El backend puede recibir datos de 2 maneras. Por POST o por PUT.

    Ahora, es el backend el que define que hace con los datos.
    Puede usarlos para consultar a la DB o para cualquier otro proposito,
    en este caso, validar si el usuario ya esta registrado.
    En pocas palabras comparar el objeto que llega en el login contra el objeto
    que ya esta registrado en la DB.
*/

/* 
    Aparte de este POST vamos a necesitar un middleware para validar el token
    que usaremos para loguearnos.
    Y otro para generar el token.
*/

authRouter.post('/login',
    check('email')
    .isEmail()
    .withMessage('Email no corresponde a una direccion de correo electronico valido'),
    check('password')
    .isLength({min: 8, max: 20})
    .withMessage("La contraseña debe tener al menos 8 caracteres y un maximo de 20 caracteres."),
    validatorMiddleware,
    validateToken,
    authController)


module.exports = authRouter;

