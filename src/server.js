const express = require('express');
const path = require('path');

//Inicializaciones
const app = express();

//settings
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));


//Middlewares


//Routes
app.use(require('./routes/index.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;