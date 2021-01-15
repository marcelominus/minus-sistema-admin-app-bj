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
//=============================================
//Hablitamos el uso de datos en JSON
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended : true}));

//Habilitamos el uso de CORS
app.use(cors());

//Creamos la direccion de imagen
app.use( '/' , loginRoute());

//Exportamos el MODULO DE APP
module.exports = app;

