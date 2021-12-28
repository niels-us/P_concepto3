const getFormatosController = require('../controllers/formatos');
const { Router } = require('express');
const router = Router();

router.get('/formatos', getFormatosController.get);
router.post('/formatos', getFormatosController.post);
router.put("/formatos/:id", getFormatosController.put);
router.delete("/formatos/:id", getFormatosController.delete);
router.get("/duplicarFormato/:id", getFormatosController.duplicarFormato);

module.exports = router;

