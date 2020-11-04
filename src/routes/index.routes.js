const {Router} = require('express');

const router = Router();

const {renderIndex, renderRecetas, renderReceta, renderSubir, createRecipe, deleteRecipe} = require('../controllers/index.controller');

router.get('/', renderIndex);
router.get('/recetas/:nacionalidad', renderRecetas);
router.get('/receta/:id', renderReceta);
router.post('/receta/delete/:id', deleteRecipe);
router.route('/subir')
    .get(renderSubir).
    post(createRecipe);


module.exports = router;