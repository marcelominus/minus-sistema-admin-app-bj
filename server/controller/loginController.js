//Importamos las variables de entorno
require('dotenv').config({ path : '../const.env'});
//Importamos el MODELL
const Login = require('../model/modelLogin');
//Importamos los SERVICE 
const getToken = require('../service/getToken');
//Importamos las variables de constantes
const constantes = require('../service/constants');

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
            const usuarioAuth = loginDate[0].idlogin;
            const tokenAuth = getToken(usuarioAuth);
            if( tokenAuth == false){
                res.json({ response : 'fail'});
            }else{
                res.json({ response : 'success', date : tokenAuth});
            }
        }

    } catch (error) {
        res.json({ response : 'error'})
    }
}
//
//Lectura de la informacion de Login Usuario
exports.readLogin = async(req, res) => {
    // res.json({ uno : req.usuario});
    const idUsuario = req.usuario.user;
    try {
        const consultaLogin  = await Login.findAll({
            where : {
                idlogin : idUsuario
            },
            raw : true
        });
        if( consultaLogin === 0 ){
            res.json({ response : 'null'})
        }else{
            res.json({ response : 'success' , data : consultaLogin});
        }
    } catch (error) {
        console.log(error);
        res.json({ response : 'error'})
    }
}

//
exports.updateLoginDate = async(req, res) => {
    //
    const idUsuario = req.usuario.user;
    try {
        const {nombre, usuario} = req.body;
        //
        const actualizarLogin = await Login.update({
            nombre      :nombre,
            usuario     :usuario,
        },{
            where       : {
                idlogin : idUsuario
            }
        });

        if( actualizarLogin){
            res.json({ response : 'success'})
        }else{
            res.json({ response : 'fail'})
        }
    } catch (error) {
        res.json({ response : 'error'})
    }
}
exports.updateLoginPassword = async(req, res) => {
    //
    const idUsuario = req.usuario.user;
    try {
        const { password } = req.body;
        const actualizarPassword = await Login.update({
            password : password
        },{
            where       : {
                idlogin : idUsuario
            }
        });
        if( actualizarPassword){
            res.json({ response : 'success'})
        }else{
            res.json({ response : 'fail'})
        }
    } catch (error) {
        res.json({response : 'error'})
    }
}

exports.updateLoginImg = async(req, res) => {
    const idUsuario = req.usuario.user;
    try {
        if(typeof req.img == 'undefined'){
            res.json({ response : 'null'});
        }else{
            const directionUniqueUpdateAvatar = constantes.avatarNew + req.img;
            const actualizarImagen = await Login.update({
                avatar : directionUniqueUpdateAvatar
            },{
                where       : {
                    idlogin : idUsuario
                }
            });
            if( actualizarImagen){
                res.json({ response : 'success'})
            }else{
                res.json({ response : 'fail'})
            }
        }
    } catch (error) {
        res.json({ response : 'error'})
    }
}

