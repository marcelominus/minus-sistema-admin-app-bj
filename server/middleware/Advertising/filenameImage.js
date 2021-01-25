/**
 * El documento rescata el nombre del archivo recientemente subido y lo extrae
 * al obtener los datos se tiene el archivo el cual el modulo de FS
 * se encargara de borra e eliminar de esta manera se evita tener archivos
 * basura que no no figurarian en carpeta de imagens
 */
//Importamos FS
const fs = require('fs');
//Importamos el MODELLO
const Advertising = require('../../model/modelAdvertising');
//===================================
module.exports = async(req, res, next) => {
    try {
        const { idpublicidad } = req.body;

        const consultaNombreImg = await Advertising.findAll({
            where : {
                idpublicidad : idpublicidad,
            },
            raw : true,
            attributes : ['direccion'],
        })
        const direccion = consultaNombreImg[0].direccion;
        const nameFile = direccion.split('/');
        await fs.unlinkSync(__dirname + `\\..\\..\\public\\imgAdvertising\\${nameFile[5]}`);   
        next();
    } catch (error) {
        res.json({ response : 'error'})
    }
}