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
        ahora : momento().format('LTS'),                // tambien podemos usar YYYY-MM-DD HH:MM:SS
        mensajes: mensajes
    })
}

/* ---------------------------------------------------- CRUD ---------------------------------------------------- */
function saveUser(req, res){
    let params = req.body;
    let usuario = new User();

    // Validacion de campos obligatorios:
    if (params.nickname && params.tipouser && params.idenuser && params.primenom && params.primeape) {
        // Capturamos los datos del formulario:
        usuario.NickName = params.nickname;
        usuario.TipoUser = params.tipouser;
        usuario.DatosUser.IdenUser = params.idenuser;
        usuario.DatosUser.PrimeNom = params.primenom;
        usuario.DatosUser.SegunNom = params.segunnom;
        usuario.DatosUser.PrimeApe = params.primeape;
        usuario.DatosUser.SegunApe = params.segunape;
        usuario.DatosUser.EmaiUser = params.emaiuser;
        usuario.DatosUser.ProgUser = params.proguser;

        console.log(params);

        // Validamos duplicidad de usuario:
        User.find({ $or: [
                            {nickmame: usuario.NickName},
                            {emaiuser: usuario.DatosUser.EmaiUser},
                            {idenuser: usuario.DatosUser.IdenUser},
                            {tipouser: usuario.TipoUser}
                         ]}).exec((err, users) =>{
                            if (err) return res.status(500).send({mensaje: mensajes.m500});
                            if (users && users.length >= 1){
                                return res.status(200).send({
                                    mensaje: 'El usuario ya existe'
                                })
                            }else{
                                // Encriptamos, y procedemos a guardar
                                bcrypt.hash(params.passuser, null, null, (err, hash)=>{
                                    usuario.PassUser = hash;
                                    // Asignamos a el ultimo campo:
                                    usuario.EstaUser = 'Activo';

                                    usuario.save((err, nuevoUser)=>{
                                        if (err) return res.status(500).send({ mensaje: mensajes.m500 })
                                        if (nuevoUser) {
                                            return res.status(200).send({ usuario: nuevoUser })
                                        } else {
                                            return res.status(404).send({ mensaje: 'No se ha registrado el usuario' });
                                        }
                                    });  
                                });
                            }
                         });
    } else {
        res.status(200).send({ mensaje: mensajes.m000 });
    }
}

// Función para login:
function loginUser(req, res){
    
}

// Función para guardar a partir de un archivo plano:
function saveLotOfUser(req, res){

}

function login(req, res){

}


module.exports = {
    testControlUser,
    saveUser
}