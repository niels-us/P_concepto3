const getIndicadoresController = require('../controllers/indicadores');
const { Router } = require('express');
const router = Router();

router.get('/indicadores', getIndicadoresController.get);
router.post('/indicadores', getIndicadoresController.post);
router.put("/indicadores/:id", getIndicadoresController.put);
router.delete("/indicadores/:id", getIndicadoresController.delete);

module.exports = router;