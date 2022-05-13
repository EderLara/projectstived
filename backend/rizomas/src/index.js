/**
 * Rizomas APP
 * @author: Johan Stived Osorio V
 */
'use strict';

 require('dotenv').config();
 
 const app = require('./app');
 
 const port = process.env.PORTSERVE;
 const url = process.env.URL;
 
 app.listen(port, ()=>{
     console.log('Server ON');
     console.log('Server listen:',url + ':'+ port);
 })