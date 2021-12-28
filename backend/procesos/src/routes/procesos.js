const getProcesosController = require('../controllers/procesos');
const { Router } = require('express');
const router = Router();

router.get('/procesos', getProcesosController.get);
router.post('/procesos', getProcesosController.post);
router.put("/procesos/:id", getProcesosController.put);
router.delete("/procesos/:id", getProcesosController.delete);


module.exports = router;

