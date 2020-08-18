const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SchemaUser = new Schema({
    nome:String,
    password:String,
    email:String,
    criado:Date
})

const usuario = mongoose.model("Usuarios",SchemaUser)
module.exports = usuario
