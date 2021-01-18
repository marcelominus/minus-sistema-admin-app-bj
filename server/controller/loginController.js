//Importamos las variables de entorno
require('dotenv').config({ path : '../const.env'});
//Importamos el MODELL
const Login = require('../model/modellLogin')
//Importamos los SERVICE 
const getToken = require('../service/getToken');

///
const getFBID = require('get-fbid');
//
//=================================================
exports.loginAdmin = async(req, res) => {
    try {
        //Utilizamos la variables de entrada
        const { user ,  pass} = req.body;
        const loginDate = await Login.findAll({
            where : {
                usuario : user,
                password : pass
            },
            raw : true
        });
        
        //Verificamos si la respuesta es vacia
        if(loginDate.length == 0){
            res.json({ response : 'null'});
        }else{
            //Ingresamos los dato extraidos en la variable UsuarioAuth y creamos el TOKEN
            const usuarioAuth = loginDate[0].usuario;
            const tokenAuth = getToken(usuarioAuth);
            if( tokenAuth == false){
                res.json({ response : 'fail'});
            }else{
                res.json({ response : 'success', date : tokenAuth});
            }
        }

    } catch (error) {
        res.json({ response : error})
    }
}

exports.pruebaAdmin = async(req, res) => {
    try {
        
        res.json({ response : getFBID('google')})
    } catch (error) {
        res.json({ response : 'fail'})
    }
}