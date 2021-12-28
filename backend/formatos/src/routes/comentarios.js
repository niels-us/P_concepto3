const getComentariosController = require('../controllers/comentarios');
const { Router } = require('express');
const router = Router();

router.get('/comentarios', getComentariosController.get);
router.post('/comentarios', getComentariosController.post);
router.put("/comentarios/:id", getComentariosController.put);
router.delete("/comentarios/:id", getComentariosController.delete);

module.exports = router;