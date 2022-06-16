/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
*/

'use strict';

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const EncuestaSchema = Schema({
    pregunta: String,
    descripcion: String,
    creado_el: { type : Date, default: Date.now }
})

module.exports = mongoose.model('Encuesta', EncuestaSchema);