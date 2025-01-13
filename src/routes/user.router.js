const express = require('express');
const { check } = require('express-validator')
const userRouter = express.Router();
const createUserController = require('../controllers/user.controller')
const validatorMiddleware = require('../utils/validator')
const repeatPasswordMiddleware = require('../utils/repeatPassword')

userRouter.post('/', 
    check("email")
        .isEmail()
        .withMessage("Debe ser una direccion de correo electronico valida"), // En caso de que isEmail sea falso
    check("age")
        .isInt({ min: 18 }) // Tambien es un booleano
        .withMessage("Debes ser mayor de 18 años"),
    check('password')
        .isLength({min: 8, max: 20})
        .withMessage("No debe tener menos de 8 caracteres ni mas de 20 caracteres.")
        .matches(/\d/) // Espera un expresion regular -> /d -> with digit
        .withMessage("La contraseña debe contener al menos un numero"),
        validatorMiddleware,
        repeatPasswordMiddleware,
        createUserController) 

module.exports = userRouter;

