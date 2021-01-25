//Importamos express
const express = require('express');
//Instanciamos ROUTER
const router = express.Router();
//Importamos el controlador
const advertisingController = require('../controller/advertisingController');
//Importamos los MIDDELAWARE
const auth = require('../middleware/authToken');

const upload = require('../middleware/Advertising/uploadImageAdvertising');
const modify = require('../middleware/Advertising/modifyImageAdvertising');
const filenameImg = require('../middleware/Advertising/filenameImage');
//===================================================
module.exports = () => {
        
    router.post('/img-create', auth, upload, modify, advertisingController.createImgAdv);
    router.post('/img-read', auth, advertisingController.readImgAdv);

    router.post('/img-update-data', auth, upload, modify, advertisingController.updateImgAdvDate);
    router.post('/img-update-file', auth, upload, modify, filenameImg, advertisingController.updateImgAdvFile);

    router.post('/img-delete', auth, filenameImg, advertisingController.deleteImgAdv);
    return router;
}