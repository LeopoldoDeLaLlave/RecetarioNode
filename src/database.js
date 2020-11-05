//Conexión de la base de datos(Mongoose)
const mongoose = require('mongoose');
require('dotenv').config();
//Connect to Mongodb
const dbURI = process.env.DBURI;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));



