//Importamos express
const express = require('express');
//Importamos ROUTER
const router = express.Router();
//Importamos Controller
const directionController = require('../controller/directionController');
//Importamos el MIDDLEWARE
const auth = require('../middleware/authToken');

//=================================================
module.exports = () => {

    router.post('/direction-create', auth, directionController.createDirection);
    router.post('/direction-read', auth, directionController.readDirection);
    router.post('/direction-update', auth, directionController.updateDirection);
    router.post('/direction-delete', auth, directionController.deleteDirection);
    return router;
}