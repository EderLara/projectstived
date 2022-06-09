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
api.post('/newuser', userControl.saveUser);
api.post('/login', userControl.loginUser)

module.exports = api;