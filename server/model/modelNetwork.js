//Importamos SEQUELIZE
const Sequelize  = require('sequelize');
//Importamos las configuraciones de la base de datos
const db = require('../config/db/dbMysql');

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
            defaultValue : '100048286309201'
        },
        tipored: {
            type : Sequelize.STRING,
            defaultValue : 'fb://profile/'
        },
        facebook : {
            type : Sequelize.STRING,
            defaultValue : 'https://www.facebook.com/boplus.canal.9'
        },
        nombre : {
            type : Sequelize.STRING
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
)
module.exports = Network;
