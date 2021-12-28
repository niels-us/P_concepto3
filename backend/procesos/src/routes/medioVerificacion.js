const getMedioVerificacion = require('../controllers/medioVerificacion');
const { Router } = require('express');
const router = Router();

router.get('/medioVerificacion', getMedioVerificacion.get);
router.post('/medioVerificacion', getMedioVerificacion.post);
router.put("/medioVerificacion/:id", getMedioVerificacion.put);
router.delete("/medioVerificacion/:id", getMedioVerificacion.delete);

module.exports = router;

