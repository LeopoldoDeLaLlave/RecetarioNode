const indexCtlr = {};

const Receta = require('../models/Receta');


indexCtlr.renderIndex = (req, res)=>{
    res.render('index');
};

indexCtlr.renderRecetas = async (req, res) => {
    const recetas = await Receta.find({ nacionalidad: req.params.nacionalidad }).lean();
    res.render('recetas', { recetas });
};

indexCtlr.renderReceta = async (req, res) => {
    const receta = await Receta.find({ _id: req.params.id }).lean();
    res.render('receta', { receta });
};


module.exports = indexCtlr;