//Importamos EXPRESS
const express = require('express');
//Importamos ROUTER
const router = express.Router();
//Importamos el controller
const imgtvradioController = require('../controller/imgtvradioController');
//Importamos el MIDDLEWARE
const auth = require('../middleware/authToken');
const upload = require('../middleware/Programming/uploadImageTvRad');
const modify = require('../middleware/Programming/modifyImageTvRad');

const filenameImg = require('../middleware/Programming/filenametvImage');
//==============================================
module.exports = () => {

    router.post('/img-create', auth, upload, modify, imgtvradioController.createImg);
    router.post('/img-read', auth, imgtvradioController.readImg);
    
    router.post('/img-update-date', auth, imgtvradioController.updateImgDate);
    router.post('/img-update-file', auth, upload, modify, filenameImg, imgtvradioController.updateImgFile);

    router.post('/img-delete', auth, filenameImg, imgtvradioController.deleteImg);
    
    return router;
}