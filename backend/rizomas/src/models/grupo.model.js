/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
*/

'use strict';

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const GrupoSchema = Schema({
    nombre_grupo: String,
    total_estudiantes: Number,
    total_personas: Number,
    creado_el: { type : Date, default: Date.now }
})

module.exports = mongoose.model('Grupo', GrupoSchema);