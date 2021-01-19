//Importamos SEQUELIZE
const Sequelize = require('sequelize');
//Importamos la configuraciones de la BASE DE DATOS
const db = require('../config/db/dbMysql');

///Creamos el MODELO de la Tabla LOGIN
const DirectionStreaming = db.define(
    'direccionstreaming',
    {
        iddireccion:{
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        tipo :{
            type : Sequelize.STRING
        },
        direccion : {
            type : Sequelize.STRING
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
)
module.exports = DirectionStreaming;