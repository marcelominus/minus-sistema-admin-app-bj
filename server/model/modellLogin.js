//Importamos SEQUELIZE
const Sequelize = require('sequelize');
//Importamos la configuraciones de la BASE DE DATOS
const db = require('../config/db/dbMysql');

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
            type : Sequelize.STRING
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
)
module.exports = Login;