const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SchemaVideo = new Schema({

    nome: String,
    genero: String,
    linguagem: String,
    detalhes: String,
    url: String,
    ano: String,
    criado: Date

})

const video = mongoose.model("Videos", SchemaVideo)
module.exports = video