//Importamos JWT
const jwt = require('jsonwebtoken');
//Importamos las variables de entorno
require('dotenv').config({ path : '../const.env'});

//====================================================
module.exports = (req, res, next) => {
    //Leemos la constante de usuario
    const SECRET = process.env.SECRET;
    //Leemos el TOKEN DEL HEADER
    const token = req.header('x-auth-token');

    ////Veriica si se envio TOKEN 
    if (!token) {
        return res.json({ response : 'fail' });
    }

    try {
    //Realiza la comprarcion del TOKEN sacando su palabra secreta codificada
    //Y la compara con la guardada en el SERVIDOR
    const cifrado = jwt.verify(token, SECRET);

    //Crea la palabra REQ.USUARIO para poder usar mas adelante
    req.usuario = cifrado.usuario;

    //Pasa al siguiente
    next();

  } catch (error) {
    return res.json({ response: 'error' });
  }
}