//Importamos EXPRESS
const express = require('express');
//Importamos ROUTER
const router = express.Router();
//Importamos el CONTROLLER
const loginController = require('../controller/loginController');
//Importamos el MIDDLEWARE
const auth = require('../middleware/authToken');
//=====================================
module.exports = () => {
    router.post('/login', loginController.loginAdmin);
    router.post('/prueba',auth, loginController.pruebaAdmin);
    return router;
}

