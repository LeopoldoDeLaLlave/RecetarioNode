const {Router} = require('express');

const router = Router();

const {renderIndex, renderRecetas, renderReceta, renderSubir} = require('../controllers/index.controller');

router.get('/', renderIndex);
router.get('/recetas/:nacionalidad', renderRecetas);
router.get('/receta/:id', renderReceta);
router.get('/subir', renderSubir);


module.exports = router;