//Archivo principal para arrancar la aplicación

//require('dotenv').config();

require('./database');
const app = require('./server');



app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});