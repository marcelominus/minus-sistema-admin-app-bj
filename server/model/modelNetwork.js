//Importamos SEQUELIZE
const Sequelize  = require('sequelize');
//Importamos las configuraciones de la base de datos
const db = require('../config/db/dbMysql');
//Importamos la varibales de ENTORNO
require('dotenv').config({ path : '../const.env'});
//Variables de DEFAULTA para el MODEL
const PAGINAID_DEFAULT_REDES = process.env.PAGINAID_DEFAULT_REDES;
const TIPOPAGINA_DEFAULT_REDES = process.env.TIPOPAGINA_DEFAULT_REDES;
const FACEBOOK_DEFAULT_REDES = process.env.FACEBOOK_DEFAULT_REDES;
const NOMBRE_DEFAULT_REDES = process.env.NOMBRE_DEFAULT_REDES;

//Cremaos un modelo con la tabla designada
const Network = db.define(
    'redes',
    {
        idredes : {
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        paginaid : {
            type : Sequelize.STRING,
            defaultValue : PAGINAID_DEFAULT_REDES
        },
        tipored: {
            type : Sequelize.STRING,
            defaultValue : TIPOPAGINA_DEFAULT_REDES
        },
        facebook : {
            type : Sequelize.STRING,
            defaultValue : FACEBOOK_DEFAULT_REDES
        },
        nombre : {
            type : Sequelize.STRING,
            defaultValue : NOMBRE_DEFAULT_REDES
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
)
module.exports = Network;
