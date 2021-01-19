//Importamos las variables de entorno
require('dotenv').config({ path : '../const.env'});
//Importamos el modello
const Network = require('../model/modelNetwork');

//===================================
exports.createNetwork = async( req, res) => {
    try {
        /**
         * idpagina : id unico de la pagina
         * tipo     : Que tipo de paginas es o es PROFILE o es PAGE
         * nombre   : Nombre o titulo de direccion de FACEBOOK
         * direccion: Direccion real de la pagina de FACEBOOK (https://facebook.con/example)
         */
        const {idpagina, tipo, nombre, facebook} = req.body;

        //Saneamiento de algunas variables

        const consultaNetwork  = await Network.findAll({
            where : {
                paginaid : idpagina
            },
            raw : true
        })
        if(consultaNetwork.length !== 0 ){
            ///ACRONIMO COPY : DATO YA EXISTENTE
            res.json({ response : 'copy'})
        }else{
            const crearNetwork = await Network.create({
                paginaid    : idpagina,
                tipored     : tipo,
                facebook    : facebook,
                nombre      : nombre
            }); 

            if(crearNetwork){
                res.json({ response : 'success'});    
            }else{
                res.json({ response : 'fail'});
            }
        }
    } catch (error) {
        console.log(error);
        res.json({ response : 'error'})
    }
}

//===========================================
//Lectura de la informacion de NETWORK
exports.readNetwork = async(req, res) => {
    try {
        const consultaNetwork  = await Network.findAll({
            raw : true
        })
        if( consultaNetwork === 0 ){
            res.json({ response : 'null'})
        }else{
            res.json({ response : 'success' , data : consultaNetwork});
        }
    } catch (error) {
        res.json({ response : 'error'})
    }
}

//===========================================
//Actualizacion de informacion de NETWORK
exports.updateNetwork = async(req, res) => {
    try {
        const {idpagina, tipo, nombre, facebook, idredes} = req.body;
        //
        const actualizarNetwork = await Network.update({
            paginaid    : idpagina,
            tipored     : tipo,
            facebook    : facebook,
            nombre      : nombre
        },{
            where       : {
                idredes : idredes
            }
        });

        if( actualizarNetwork){
            res.json({ response : 'success'})
        }else{
            res.json({ response : 'fail'})
        }
    } catch (error) {
        res.json({ response : 'error'})
    }
}

//===========================================
//
exports.deleteNetwork = async(req, res) => {
    try {
        const { paginaid } = req.body;
        //
        const borrarNetwork = await Network.destroy({
            where : {
                paginaid : paginaid
            }
        });
        if(borrarNetwork){
            res.json({ response : 'success'})
        }else{
            res.json({ response : 'fail' })
        }
    } catch (error) {
        console.log(error);
        res.json({ response : 'error'})
    }
}