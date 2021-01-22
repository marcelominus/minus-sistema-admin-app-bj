//Importamos SEQUELIZE
const Sequelize = require('sequelize');
//Importamos la configuraciones de la BASE DE DATOS
const db = require('../config/db/dbMysql');

///Creamos el MODELO de la Tabla LOGIN
const ImgTvRad = db.define(
    'imgtvrad',
    {
        idimg : {
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        titulo : {
            type : Sequelize.STRING
        },
        descripcion : {
            type : Sequelize.TEXT
        },
        direccion : {
            type : Sequelize.STRING
        },
        tipo : {
            type : Sequelize.STRING
        },
        paginaid : {
            type : Sequelize.STRING
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
)
module.exports = ImgTvRad;