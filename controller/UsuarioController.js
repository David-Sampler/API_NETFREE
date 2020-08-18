const usuario = require('../schemas/schemaUsuario')
module.exports = {


    insertUser:async(req,res)=>{
        console.log(req.body)
        try {
            new usuario(req.body).save()
            res.json("Inserido com sucesso")
        } catch (error) {
             console.log("Erro ao inserir")
        }
       
        
    }

}