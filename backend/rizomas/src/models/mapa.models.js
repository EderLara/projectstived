/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
*/

'use strict';

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const MapaSchema = Schema({
    nombre_mapa: String,
    punto: String,
    descripcion_mapa: String,
    estado: String,
    creado_el: { type : Date, default: Date.now }
})

module.exports = mongoose.model('Mapa', MapaSchema);