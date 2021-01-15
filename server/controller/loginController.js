//Importamos las variables de entorno
require('dotenv').config({ path : '../const.env'});
//Importamos el MODELL

//Importamos los SERVICE 


//=================================================
exports.loginAdmin = async(req, res) => {
    try {
        res.json({ response : 'VALENCIA LAURA'})
    } catch (error) {
        res.json({ response : error})
    }
}