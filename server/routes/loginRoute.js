//Importamos EXPRESS
const express = require('express');
//Importamos ROUTER
const router = express.Router();
//Importamos el CONTROLLER
const loginController = require('../controller/loginController');
//Importamos el MIDDLEWARE
const auth = require('../middleware/authToken');

const upload = require('../middleware/Administrator/uploadImage');
const modify = require('../middleware/Administrator/modifyImage');

const filename = require('../middleware/Administrator/filenameImage');
//=====================================
module.exports = () => {
    router.post('/login', loginController.loginAdmin);
    router.post('/read-login', auth, loginController.readLogin);
    router.post('/update-login-date', auth, loginController.updateLoginDate);
    router.post('/update-login-pass', auth, loginController.updateLoginPassword);
    router.post('/update-login-img', auth, upload, modify, filename, loginController.updateLoginImg);

    return router;
}

