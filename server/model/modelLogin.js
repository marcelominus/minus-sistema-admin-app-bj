//Importamos SEQUELIZE
const Sequelize = require('sequelize');
//Importamos la configuraciones de la BASE DE DATOS
const db = require('../config/db/dbMysql');
//Importamos las variables de entorno
require('dotenv').config({ path : '../const.env'});
//Importamos las constantes
const constantes = require('../service/constants');

///Creamos el MODELO de la Tabla LOGIN
const Login = db.define(
    'login',
    {
        idlogin : {
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre : {
            type : Sequelize.STRING,
            defaultValue : 'MARSLNLAU'
        },
        usuario : {
            type : Sequelize.STRING,
            defaultValue : 'admin'
        },
        password : {
            type : Sequelize.STRING,
            defaultValue : '16112905'
        },
        avatar : {
            type : Sequelize.STRING,
            defaultValue : constantes.avatarDefault
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
)
module.exports = Login;