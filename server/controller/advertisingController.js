//Importamos la variables de entorno
require('dotenv').config({ path : '../const.env'});
//Importamos el MODEL
const Advertising = require('../model/modelAdvertising');

//Importamos las constantes
const constantes = require('../service/constants');
//============================================
//
exports.createImgAdv = async(req, res) => {
    try {
        //Declaramos la variables de entrada que se tiene en el formulario
        const {titulo, tipo} = req.body;
        
        const direccionUniqueAdvertising = constantes.advertisingNew + req.imgadvertising;
        
        const crearImg = Advertising.create({
            titulo      : titulo,
            direccion   : direccionUniqueAdvertising,
            tipo        : tipo,
        });
        if(crearImg){
            res.json({ response : 'success'});    
        }else{
            res.json({ response : 'fail'});
        }
        
    } catch (error) {
        res.json({ response : 'error'})
    }
}

//=========================================
//Lectura de los datos de imagenes de publicidad
exports.readImgAdv = async(req, res) => {
    try {
        const consultaImg = await Advertising.findAll({
            raw : true
        });
        if(consultaImg === 0){
            res.json({ response : 'null'})
        }else{
            res.json({ response : consultaImg});
        }
    } catch (error) {
        res.json({ response : 'error'})
    }
}
//==========================================
//
exports.updateImgAdvDate  = async(req, res) => {
    try {
        const {idpublicidad, titulo, tipo} = req.body;
        const actualizarDataImg  = await Advertising.update({
            titulo      : titulo,
            tipo        : tipo,
        }, {
            where : {
                idpublicidad : idpublicidad 
            }
        })
        if( actualizarDataImg ){
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
exports.updateImgAdvFile = async(req, res) => {
    try {
        try {
            const {idpublicidad} = req.body;

            const direccionUniqueAdvertising = constantes.advertisingNew + req.imgadvertising;
            
            const actualizarFileImg = await Advertising.update({
                direccion : direccionUniqueAdvertising,
            },{
                where : {
                    idpublicidad : idpublicidad
                }
            })
            if(actualizarFileImg){
                res.json({ response : 'success'})
            }else{
                res.json({ response : 'fail'})
            }
        } catch (error) {
            console.log(error);
            res.json({ response : 'error'})
        }
    } catch (error) {
        res.json({ response : 'error'})
    }
}
//==========================================
//
exports.deleteImgAdv = async(req, res) => {
    try {
        const { idpublicidad } = req.body;
        //
        const borrarImg = await Advertising.destroy({
            where : {
                idpublicidad : idpublicidad
            }
        });
        if(borrarImg){
            res.json({ response : 'success'})
        }else{
            res.json({ response : 'fail' })
        }
    } catch (error) {
        console.log(error);
        res.json({ response : 'error'})
    }
}