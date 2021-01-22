//Importamos las variables de entorno\
require('dotenv').config({ path : '../const.env'});
//Importamos el MODEL
const ImgTvRad = require('../model/modelImgTvRad');

//Importamos la variables de CONSTANTES
const constantes = require('../service/constants');

//=====================================================
/** Creamos el modulo de inscripcion de datos */
exports.createImg = async(req, res) => {
    try {
        //Declaramos la variables de entrada que se tiene en el formulario
        const {titulo, descripcion, tipo, paginaid} = req.body;
        
        const directionUniqueImgTvRad = constantes.imgTvRadNew + req.imgtvrad;
  
        const crearImg = ImgTvRad.create({
            titulo      : titulo,
            descripcion : descripcion,
            direccion   : directionUniqueImgTvRad,
            tipo        : tipo,
            paginaid    : paginaid,
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

//===========================================
//Lectura de la informacion de IMG
exports.readImg = async(req, res) => {
    try {
        const consultaImg  = await ImgTvRad.findAll({
            raw : true
        })
        if( consultaImg === 0 ){
            res.json({ response : 'null'})
        }else{
            res.json({ response : 'success' , data : consultaImg});
        }
    } catch (error) {
        res.json({ response : 'error'})
    }
}

//============================================
//Actualizacion de informacion de IMG 
exports.updateImgDate = async(req, res) => {
    try {

        const {idimg, titulo, descripcion, tipo, paginaid} = req.body;
        
        const actualizarDataImg  = await ImgTvRad.update({
            titulo      : titulo,
            descripcion : descripcion,
            tipo        : tipo,
            paginaid    : paginaid,
        }, {
            where : {
                idimg : idimg 
            }
        })
        if( actualizarDataImg ){
            res.json({ response : 'success'})
        }else{
            res.json({ response : 'fail'})
        }
    } catch (error) {
        console.log(error);
        res.json({ response : 'error'})
    }
}
//===============================================
//
exports.updateImgFile = async(req, res) => {
    try {
        const {idimg} = req.body;
        const directionUniqueImgTvRad = constantes.imgTvRadNew + req.imgtvrad;
        
        const actualizarFileImg = await ImgTvRad.update({
            direccion : directionUniqueImgTvRad,
        },{
            where : {
                idimg : idimg
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
}

//====================================================
//
exports.deleteImg = async(req, res) => {
    try {
        const { idimg } = req.body;
        //
        const borrarImg = await ImgTvRad.destroy({
            where : {
                idimg : idimg
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