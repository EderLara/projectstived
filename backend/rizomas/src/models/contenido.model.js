/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
*/

'use strict';

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ContenidoSchema = Schema({
    tipo_contenido: { type : Schema.ObjectId, ref: 'TipoContenido' },
    mapa: { type : Schema.ObjectId, ref: 'Mapa' },
    nombre_contenido: String,
    descripcion: String,
    adjunto: String,
    estado: String,
    creado_el: { type : Date, default: Date.now }
})

module.exports = mongoose.model('Contenido', ContenidoSchema);