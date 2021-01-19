//Importamos MULTER
const multer  = require('multer');
//Importamos SHORTID
const shortid = require('shortid');

//---------------------------------------------
module.exports = function (req, res, next) {
  try {
    const configuracionMulter = {
        storage : fileStorage = multer.diskStorage({
            destination: (req, file, cb) => {
                console.log(req.body.texto);
                cb(null, __dirname + '\\..\\public');
            },
            filename : (req, file, cb) => {
                const extension = file.mimetype.split('/')[1];
                cb(null, `${shortid.generate()}.${extension}`);
            }
        }),
        fileFilter(req, file, cb){
            if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
                cb(null, true);
            }else{
                cb(new Error('FORMATO MAS VALIDO'))
            }
        }
    }
    const uploadFile = multer(configuracionMulter).array('imagen', 'texto');
    uploadFile(req, res, function(error){
        if(error){
            console.log(req.body);
            res.json({ response : 'error'})
        }
        next();
    })
    
  } catch (error) {
    return res.status(401).json({ msg: "Token no valido" });
  }
};