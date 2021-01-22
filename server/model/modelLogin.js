//Importamos SEQUELIZE
const Sequelize = require('sequelize');
//Importamos la configuraciones de la BASE DE DATOS
const db = require('../config/db/dbMysql');
//Importamos las variables de entorno
require('dotenv').config({ path : '../const.env'});
const NOMBRE_DEFAULT_LOGIN = process.env.NOMBRE_DEFAULT_LOGIN;
const USUARIO_DEFAULT_LOGIN= process.env.USUARIO_DEFAULT_LOGIN;
const PASS_DEFAULT_LOGIN = process.env.PASS_DEFAULT_LOGIN;
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
            defaultValue : NOMBRE_DEFAULT_LOGIN
        },
        usuario : {
            type : Sequelize.STRING,
            defaultValue : USUARIO_DEFAULT_LOGIN
        },
        password : {
            type : Sequelize.STRING,
            defaultValue : PASS_DEFAULT_LOGIN
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