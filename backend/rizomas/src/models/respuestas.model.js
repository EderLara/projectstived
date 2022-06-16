/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
*/

'use strict';

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const RespuestaSchema = Schema({
    pregunta: { type : Schema.ObjectId, ref: 'Encuesta' }, 
    respuesta: String,
    creado_el: { type : Date, default: Date.now }
})

module.exports = mongoose.model('Respuesta', RespuestaSchema);