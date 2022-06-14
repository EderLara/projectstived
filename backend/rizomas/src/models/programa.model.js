/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
*/

'use strict';

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ProgramaSchema = Schema({
    nombre_programa: String,
    creado_el: { type : Date, default: Date.now }
})

module.exports = mongoose.model('Programa', ProgramaSchema);