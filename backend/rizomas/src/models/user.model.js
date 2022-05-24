/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
*/

'use strict';

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UsuarioSchema = Schema({
    NickName : String,                                              // Correo Electrónico de ingreso de usuario
    PassUser : String,                                              // Password del usuario
    EstaUser : String,                                              // Estado del Usuario
    TipoUser : { type : Schema.ObjectId, ref: 'TipoUsuario' },      // Tipo de Usuario
    DatosUser : {
        TipoDocu : { type: Schema.ObjectId, ref: 'TipoDocu' },      // Tipo de documento del usuario
        IdenUser : String,                                          // Número de identificación
        NombUser : String,                                          // Nombres del Usuario
        ApelUser : String,                                          // Apellidos del Usuario
        EmaiUser : String,                                          // Correo Electrónico personal del usuario 
        ProgUser : String                                           // Programa al que pertenece el usuario
    }
})

module.exports = mongoose.model('Usuario', UsuarioSchema)