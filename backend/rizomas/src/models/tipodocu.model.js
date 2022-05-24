/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
*/

'use strict';

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const TipoDocumentoSchema = Schema({
    nombre_tipoDocumento: String
})

module.exports = mongoose.model('TipoDocumento', TipoDocumentoSchema);