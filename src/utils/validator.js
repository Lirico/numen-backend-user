const { validationResult } = require('express-validator')

const validatorMiddleware = (request, response, next) => {
   const errors = validationResult(request)

   console.log(errors)

   // como errors es un ["debe contener un digito", "no es un correo valido"] quiero saber si esta vacio o no
   if(!errors.isEmpty()) { // true si es vacio, false si no esta vacio
        console.log(errors.array())
        return response.status(400).json({errors: errors.array()})
   }

   next();
}


module.exports = validatorMiddleware;