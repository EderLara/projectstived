/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
*/

'use strict';

const express = require('express')
const userControl = require('../controllers/user.control')

const api = express.Router();

// Middleware de autenticación:
const md_auth = require('../middlewares/auth')

// Rutas:
api.get('/testuser', md_auth.ensureAuth, userControl.testControlUser)

module.exports = api