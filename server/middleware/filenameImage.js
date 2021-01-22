//Importamos FS
const fs = require('fs');
//Importamos el MODELLO
const Login = require('../model/modelLogin');
//===================================
module.exports = async(req, res, next) => {
    try {
        const idUsuario = req.usuario.user;
        const consultaUsuario = await Login.findAll({
            where : {
                idlogin : idUsuario,
            },
            raw : true,
            attributes : ['avatar'],
        })
        const direccion = consultaUsuario[0].avatar;
        const nameFile = direccion.split('/');
        const deleteFile = await fs.unlinkSync(__dirname + `\\..\\public\\${nameFile[4]}`);
        next();
    } catch (error) {
        res.json({ response : 'error'})
    }
}