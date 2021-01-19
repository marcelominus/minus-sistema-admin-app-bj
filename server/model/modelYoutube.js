//Importamos SEQUELIZE
const Sequelize  = require('sequelize');
//Importamos las configuraciones de la base de datos
const db = require('../config/db/dbMysql');

//Cremaos un modelo con la tabla designada
const YoutubeList = db.define(
    'youtubelist',
    {
        idqd : {
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        titulo : {
            type : Sequelize.STRING
        },
        direccion: {
            type : Sequelize.STRING
        },
        tipo : {
            type : Sequelize.STRING
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
)
module.exports = YoutubeList;
