//Importamos EXPRESS
const express  = require('express');
//Instanciamos APP
const app = express();
//Importamos las variables de entorno\
require('dotenv').config({path : './const.env'});
//Importmaos BODY PARSER
const bodyparser = require('body-parser');
//Importamos CORS
const cors = require('cors');
//Importamos las RUTAS
const loginRoute = require('./routes/loginRoute');
const networkRoute = require('./routes/networkRoute');
const imgtvradioRoute = require('./routes/imgtvradioRoute');
const advertisingRoute = require('./routes/advertisingRoute');
const directionRoute  = require('./routes/directionRoute');
const youtubeRoute = require('./routes/youtubeRoute');

var multer = require('multer');
var forms = multer();

//=============================================
//Hablitamos el uso de datos en JSON
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended : true}));
// app.use(forms.array()); 
//Habilitamos el uso de CORS
app.use(cors());
//
app.use("/state", express.static("public"));

//Creamos la direccion de imagen
app.use( '/' , loginRoute());
app.use('/network', networkRoute());
app.use('/imgtvrad', imgtvradioRoute());
app.use('/advertising', advertisingRoute());
app.use('/direction', directionRoute());
app.use('/youtube', youtubeRoute());
//Exportamos el MODULO DE APP
module.exports = app;

