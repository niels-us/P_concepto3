const getCamposAdicController = require('../controllers/camposAdic');
const { Router } = require('express');
const router = Router();

router.get('/camposAdic', getCamposAdicController.get);
router.post('/camposAdic', getCamposAdicController.post);
router.put("/camposAdic/:id", getCamposAdicController.put);
router.delete("/camposAdic/:id", getCamposAdicController.delete);

module.exports = router;