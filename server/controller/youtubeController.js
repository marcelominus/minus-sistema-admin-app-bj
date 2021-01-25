//Importamos variables de entorno
require('dotenv').config({ path : '../const.env'});
//Importamos el MODEL
const Youtube = require('../model/modelYoutube');

//=========================================
exports.createDirectionYt = async( req, res) => {
    try {

        const {titulo, direccion, tipo} = req.body;

        //Saneamiento de algunas variables
        const crearDireccionYt = await Youtube.create({
           titulo : titulo,
           direccion : direccion,
           tipo : tipo
        }); 
        if(crearDireccionYt){
            res.json({ response : 'success'});    
        }else{
            res.json({ response : 'fail'});
        }
    } catch (error) {
        res.json({ response : 'error'})
    }
}

//===========================================
//Lectura de la informacion de NETWORK
exports.readDirectionYt = async(req, res) => {
    try {
        const consultaDireccionYt  = await Youtube.findAll({
            raw : true
        })
        if( consultaDireccionYt === 0 ){
            res.json({ response : 'null'})
        }else{
            res.json({ response : 'success' , data : consultaDireccionYt});
        }
    } catch (error) {
        res.json({ response : 'error'})
    }
}

//===========================================
//Actualizacion de informacion de NETWORK
exports.updateDirectionYt = async(req, res) => {
    try {
        const {titulo, direccion, tipo, idqd} = req.body;
        //
        const actualizarDireccionYt = await Youtube.update({
            titulo : titulo,
            direccion : direccion,
            tipo : tipo
        },{
            where       : {
                idqd : idqd
            }
        });

        if( actualizarDireccionYt){
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
exports.deleteDirectionYt = async(req, res) => {
    try {
        const { idqd } = req.body;
        //
        const borrarDireccionYt = await Youtube.destroy({
            where : {
                idqd : idqd
            }
        });
        if(borrarDireccionYt){
            res.json({ response : 'success'})
        }else{
            res.json({ response : 'fail' })
        }
    } catch (error) {
        res.json({ response : 'error'})
    }
}