//Importamos EXPRESS
const express = require('express');
//Importamos ROUTER
const router = express.Router();
//Importamos el CONTROLLER
const loginController = require('../controller/loginController');
//Importamos el MIDDLEWARE
const auth = require('../middleware/authToken');

const post = require('../middleware/postData');
const upload = require('../middleware/uploadImage');


//=====================================
module.exports = () => {
    router.post('/login', loginController.loginAdmin);
    router.post('/read-login', auth, loginController.readLogin);
    router.post('/update-login-date', auth, loginController.updateLoginDate);
    router.post('/update-login-pass', auth, loginController.updateLoginPassword);
    router.post('/update-login-img', upload, loginController.updateLoginImg )

    router.post('/prueba', upload, loginController.pruebalogin);
    return router;
}

