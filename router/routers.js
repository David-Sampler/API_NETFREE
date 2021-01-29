const video = require('../controller/VideoController');
const usuario = require('../controller/UsuarioController')

module.exports = (app) => {
     
    app.get('/', video.allVideos)
    app.get('/allvideos', video.allVideos)
    app.post('/insertvideo', video.insertVideo)
    //metodos usuarios
    app.post("/inserirusuario", usuario.insertUser)
}