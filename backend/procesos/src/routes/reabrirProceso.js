const getReabrirProceso = require('../controllers/reabrirProceso');
const { Router } = require('express');
const router = Router();

router.get('/reabrirproceso', getReabrirProceso.get);
router.post('/reabrirproceso', getReabrirProceso.post);
router.put("/reabrirproceso/:id", getReabrirProceso.put);
router.delete("/reabrirproceso/:id", getReabrirProceso.delete);

module.exports = router;