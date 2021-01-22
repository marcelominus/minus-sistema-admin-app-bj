/**
 * El documento rescata el nombre del archivo recientemente subido y lo extrae
 * al obtener los datos se tiene el archivo el cual el modulo de FS
 * se encargara de borra e eliminar de esta manera se evita tener archivos
 * basura que no no figurarian en carpeta de imagens
 */
//Importamos FS
const fs = require('fs');
//Importamos el MODELLO
const ImgTvRad = require('../../model/modelImgTvRad');
//===================================
module.exports = async(req, res, next) => {
    try {
        const { idimg } = req.body;

        const consultaNombreImg = await ImgTvRad.findAll({
            where : {
                idimg : idimg,
            },
            raw : true,
            attributes : ['direccion'],
        })
        const direccion = consultaNombreImg[0].direccion;
        const nameFile = direccion.split('/');
        await fs.unlinkSync(__dirname + `\\..\\..\\public\\imgProgramming\\${nameFile[5]}`);   
        next();
    } catch (error) {
        console.log(error)
        res.json({ response : 'error'})
    }
}