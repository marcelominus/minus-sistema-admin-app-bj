//
const sharp = require('sharp');
const fs = require('fs')
//Importamos SHORTID
const shortid = require('shortid');
//---------------------------------------------
module.exports = async(req, res, next) => {
  try {
    const filename = `${shortid.generate()}.jpeg`;
    const dato = await sharp(req.file.path).resize(200).jpeg({quality: 60}).toFile(__dirname + `\\..\\..\\public\\${filename}`);
    fs.unlinkSync(req.file.path);
    req.img = filename;

    next();
  } catch (error) {
    //
    return res.status(401).json({ msg: "Token no valido" });
  }
};