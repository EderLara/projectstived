/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
*/

'use strict';

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const TipoContenidoSchema = Schema({
    nombre_tipoContenido: String,
    creado_el: { type : Date, default: Date.now }
})

module.exports = mongoose.model('TipoContenido', TipoContenidoSchema);