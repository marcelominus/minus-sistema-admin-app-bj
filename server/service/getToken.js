//Importamos las varaibles de ENTORNO
require('dotenv').config({ path : '../const.env'});
//Importamos JSON WEB TOKEN
const jwt = require('jsonwebtoken');

//========================================
const getToken = (valor) => {
    //Estructura del JSON WEB TOKEN
    const CODE_SECRET = process.env.SECRET;

    const payload = {
        usuario : {
            user : valor
        }
    }
    //Firmamos el TOKEN
    const tokenGeting = jwt.sign(payload, CODE_SECRET, {
        expiresIn : '24h'
    });
    if(!tokenGeting){
        return false;
    }else{
        return tokenGeting;
    }
}
module.exports = getToken;