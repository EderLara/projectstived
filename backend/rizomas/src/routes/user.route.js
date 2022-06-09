/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
*/

'use strict';

const express = require('express');
const userControl = require('../controllers/user.control');

const api = express.Router();

// Middleware de autenticación:
const md_auth = require('../middlewares/auth');

// Rutas:
api.get('/testuser', userControl.testControlUser);
api.post('/usuario/nuevo', userControl.saveUser);
api.post('/usuario/login', userControl.loginUser);
api.put('/usuario/:idusuario', userControl.delUser);
api.put('/usuario/rol/:idusuario', userControl.changeRol);

module.exports = api;