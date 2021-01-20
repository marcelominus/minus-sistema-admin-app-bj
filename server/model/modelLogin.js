//Importamos SEQUELIZE
const Sequelize = require('sequelize');
//Importamos la configuraciones de la BASE DE DATOS
const db = require('../config/db/dbMysql');
//Importamos las variables de entorno
require('dotenv').config({ path : '../const.env'});
const IP_SERVER = process.env.IP_SERVER;
const PORT_SERVER = process.env.PORT_SERVER;
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
            type : Sequelize.STRING
        },
        usuario : {
            type : Sequelize.STRING
        },
        password : {
            type : Sequelize.STRING
        },
        avatar : {
            type : Sequelize.STRING,
            defaultValue : `http://${IP_SERVER}:${PORT_SERVER}/state/defaultuser.jpg`
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
)
module.exports = Login;