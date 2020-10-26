const {Router} = require('express');

const router = Router();

const {renderIndex, renderRecetas, renderReceta} = require('../controllers/index.controller');

router.get('/', renderIndex);
router.get('/recetas/:nacionalidad', renderRecetas);
router.get('/receta/:id', renderReceta);


module.exports = router;