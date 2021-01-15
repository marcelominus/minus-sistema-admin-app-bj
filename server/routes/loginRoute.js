//Importamos EXPRESS
const express = require('express');
//Importamos ROUTER
const router = express.Router();
//Importamos el CONTROLLER
const loginController = require('../controller/loginController');
//Importamos el MIDDLEWARE

//=====================================
module.exports = () => {
    router.get('/login', loginController.loginAdmin);

    return router;
}

