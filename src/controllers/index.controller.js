const indexCtlr = {};

const Receta = require('../models/Receta');


indexCtlr.renderIndex = (req, res) => {
    res.render('index');
};

indexCtlr.renderRecetas = async (req, res) => {
    const recetas = await Receta.find({ nacionalidad: req.params.nacionalidad }).lean();
    res.render('recetas', { recetas });
};

indexCtlr.renderReceta = async (req, res) => {
    try {
        const receta = await Receta.findById(req.params.id);
        res.render('receta', { receta });
    } catch (error) {
        console.log(error);
    }

};


module.exports = indexCtlr;