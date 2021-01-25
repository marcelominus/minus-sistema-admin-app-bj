//Importamos las variables de entorno
require('dotenv').config({ path : '../const.env'});
//Importamos el MODEL
const Direction = require('../model/modelDirection');

//===================================
exports.createDirection = async( req, res) => {
    try {

        const {tipo, direccion} = req.body;

        //Saneamiento de algunas variables
        const crearDireccion = await Direction.create({
           tipo : tipo,
           direccion : direccion
        }); 
        if(crearDireccion){
            res.json({ response : 'success'});    
        }else{
            res.json({ response : 'fail'});
        }
        
    } catch (error) {
        console.log(error);
        res.json({ response : 'error'})
    }
}

//===========================================
//Lectura de la informacion de NETWORK
exports.readDirection = async(req, res) => {
    try {
        const consultaDireccion  = await Direction.findAll({
            raw : true
        })
        if( consultaDireccion === 0 ){
            res.json({ response : 'null'})
        }else{
            res.json({ response : 'success' , data : consultaDireccion});
        }
    } catch (error) {
        res.json({ response : 'error'})
    }
}

//===========================================
//Actualizacion de informacion de NETWORK
exports.updateDirection = async(req, res) => {
    try {
        const {tipo, direccion, iddireccion} = req.body;
        //
        const actualizarDireccion = await Direction.update({
            tipo        : tipo,
            direccion   : direccion
        },{
            where       : {
                iddireccion : iddireccion
            }
        });

        if( actualizarDireccion){
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
exports.deleteDirection = async(req, res) => {
    try {
        const { iddireccion } = req.body;
        //
        const borrarDireccion = await Direction.destroy({
            where : {
                iddireccion : iddireccion
            }
        });
        if(borrarDireccion){
            res.json({ response : 'success'})
        }else{
            res.json({ response : 'fail' })
        }
    } catch (error) {
        console.log(error);
        res.json({ response : 'error'})
    }
}