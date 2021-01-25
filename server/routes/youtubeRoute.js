//Importamos express
const express = require('express');
//Importamos ROUTER
const router = express.Router();
//Importamos el CONTROLLER
const youtubeController = require('../controller/youtubeController');
//Importamos el MIDDLEWARE
const auth = require('../middleware/authToken');
//==========================================
module.exports = () => {

    router.post('/youtube-create', auth, youtubeController.createDirectionYt);
    router.post('/youtube-read', auth, youtubeController.readDirectionYt);
    router.post('/youtube-update', auth, youtubeController.updateDirectionYt);
    router.post('/youtube-delete', auth, youtubeController.deleteDirectionYt);

    return router;
}
