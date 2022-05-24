/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
*/

'use strict';

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const TipoUsuarioSchema = Schema({
    nombre_tipoUsuario: String
})

module.exports = mongoose.model('TipoUsuario', TipoUsuarioSchema);