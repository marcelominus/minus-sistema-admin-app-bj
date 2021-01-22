//
const sharp = require('sharp');
const fs = require('fs')
//Importamos SHORTID
const shortid = require('shortid');
//---------------------------------------------
module.exports = async(req, res, next) => {
  try {
    //Realizamos un saneamiento de variables para el nombre y extension
    const extension = req.file.mimetype.split('/')[1];
    
    let nombreImgOriginal = req.file.originalname.split('.')[0];
    nombreImgOriginal = nombreImgOriginal.toLowerCase();

    const filename = `${shortid.generate()}${nombreImgOriginal}.${extension}`;

    const dato = await sharp(req.file.path).resize(200, 300).jpeg({quality: 60}).toFile(__dirname + `\\..\\..\\public\\imgProgramming\\${filename}`);
    fs.unlinkSync(req.file.path);
    req.imgtvrad = filename;
    next();
  } catch (error) {
    //
    return res.status(401).json({ msg: "Token no valido" });
  }
};