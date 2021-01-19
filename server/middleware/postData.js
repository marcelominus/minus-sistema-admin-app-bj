//Importamos MULTER
const multer  = require('multer');
//Importamos SHORTID
const shortid = require('shortid');
//

module.exports = (req, res) => {
    try {   
        
        res.json({ response : 'marcelo poma'})
    } catch (error) {
        res.json({ response : 'LENNYTA'})
    }
}