//Importamos EXPRESS
const express = require('express');
//Importamos ROUTER
const router = express.Router();
//Importamos el CONTROLLER
const networkController = require('../controller/networkController');
//Importamos el MIDDLEWARE
const auth = require('../middleware/authToken');

//==========================================
module.exports = () => {
    router.post('/create-network',auth, networkController.createNetwork);
    router.post('/read-network' , auth, networkController.readNetwork);
    router.post('/update-network', auth, networkController.updateNetwork);
    router.post('/delete-network', auth, networkController.deleteNetwork);
    return router;
}