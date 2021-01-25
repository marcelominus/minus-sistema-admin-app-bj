//Declaramos las constantes de direcciones necesarias
//Importamos las variables de entorno
require('dotenv').config({ path : '../const.env'});
//Invocamos las variables de entorno
const IP_SERVER = process.env.IP_SERVER;
const PORT_SERVER = process.env.PORT_SERVER;

//Direccion GLOBAL DE IMAGENES
const direccion_basica = `http://${IP_SERVER}:${PORT_SERVER}`;

///================================================LOGIN CONTROLLER
/** DIRECCION DE  imagen de AVATAR DEFAULT*/
module.exports.avatarDefault    = `${direccion_basica}/state/defaultuser.jpg`;
/** DIRECCION DE  imagen de AVATAR CAMBIADO */
module.exports.avatarNew        = `${direccion_basica}/state/`;
/** DIRECCION DE  imagen de TIPO RADIO O TV*/
module.exports.imgTvRadNew      = `${direccion_basica}/state/imgProgramming/`;
/** DIRECCION DE  imagen de TIPO PUBLICIDAD */
module.exports.advertisingNew   = `${direccion_basica}/state/imgAdvertising/`;