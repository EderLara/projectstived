/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
*/

'use strict';

// Modelo de datos:
const User = require('../models/user.model')

// Constantes y librerias
const bcrypt = require('bcrypt-nodejs')
const mongoosePaginate =  require('mongoose-pagination')
const path = require('path')
const fs = require('fs')
const { mensajes } = require('../util/estados')
const momento = require('moment')

// Servicio de autenticación:
const jwt = require('../services/jwt')

/* ---------------------------------------------------- TEST ---------------------------------------------------- */
function testControlUser (req, res){
    console.log(req.body)
    res.status(200).send({
        ahora : momento().format('LTS'),
        mensajes: mensajes
    })
}

/* ---------------------------------------------------- CRUD ---------------------------------------------------- */
function saveUser(req, res){
    
}

function login(req, res){

}


module.exports = {
    testControlUser
}