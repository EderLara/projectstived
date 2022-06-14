/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
*/

'use strict';

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ValoracionSchema = Schema({
    usuario: { type : Schema.ObjectId, ref: 'Usuario' },
    contenido: { type : Schema.ObjectId, ref: 'Contenido' }, 
    evaluacion: Number,
    creado_el: { type : Date, default: Date.now }
})

module.exports = mongoose.model('Valoracion', ValoracionSchema);