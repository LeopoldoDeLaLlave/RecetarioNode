//Conexión de la base de datos(Mongoose)
const mongoose = require('mongoose');

//Connect to Mongodb
const dbURI = "mongodb+srv://javi:1234javi@nodetuts.uqpj3.mongodb.net/recetasApp?retryWrites=true&w=majority";

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));



