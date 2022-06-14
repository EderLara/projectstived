/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
*/

'use strict';

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const MatriculaSchema = Schema({
    grupo: { type : Schema.ObjectId, ref: 'Grupo' },
    usuario: { type : Schema.ObjectId, ref: 'Usuario' },
    programa: { type : Schema.ObjectId, ref: 'Programa' }, 
    creado_el: { type : Date, default: Date.now }
})

module.exports = mongoose.model('Matricula', MatriculaSchema);