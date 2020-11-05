const {Router} = require('express');

const router = Router();

const {renderIndex, 
    renderRecetas, 
    renderReceta, 
    renderSubir, 
    createRecipe, 
    deleteRecipe, 
    renderEditRecipe, 
    updateRecipe
    } = require('../controllers/index.controller');


//Abre la página principa
router.get('/', renderIndex);

//Muestra todas las recetas de una nacionalidad
router.get('/recetas/:nacionalidad', renderRecetas);

//Carga una receta concreta
router.get('/receta/:id', renderReceta);

//Editar recetas
router.route('/receta/editar/:id')
    .get(renderEditRecipe).
    put(updateRecipe);

//Borrar recetas
router.delete('/receta/delete/:id', deleteRecipe);

//Subir nuevas recetas
router.route('/subir')
    .get(renderSubir).
    post(createRecipe);


module.exports = router;