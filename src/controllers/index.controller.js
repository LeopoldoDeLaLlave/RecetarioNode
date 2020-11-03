const indexCtlr = {};

const Receta = require('../models/Receta');

//Carga el index
indexCtlr.renderIndex = (req, res) => {
    res.render('index');
};

//Carga todas las recetas de una nacionalidad
indexCtlr.renderRecetas = async (req, res) => {
    const recetas = await Receta.find({ nacionalidad: req.params.nacionalidad }).lean();
    res.render('recetas', { recetas });
};


//Carga la información de una receta
indexCtlr.renderReceta = async (req, res) => {
    try {
        const receta = await Receta.findById(req.params.id);
        res.render('receta', { receta });
    } catch (error) {
        console.log(error);
    }

};


//Muestra el formulario para subir recetas
indexCtlr.renderSubir = (req, res) => {
    res.render('recetaForm');
};


module.exports = indexCtlr;