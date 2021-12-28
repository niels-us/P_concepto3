const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    console.log('welcome to formatos ApiRest');
    res.json({
        mensaje: 'welcome to formatos ApiRest'
    })
})
module.exports = router;