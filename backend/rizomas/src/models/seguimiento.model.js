/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
*/

'use strict';

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const SeguimientoSchema = Schema({
    matricula: { type : Schema.ObjectId, ref: 'Matricula' },
    contenido: { type : Schema.ObjectId, ref: 'Contenido' }, 
    visitas: Number,
    creado_el: { type : Date, default: Date.now }
})

module.exports = mongoose.model('Seguimiento', SeguimientoSchema);