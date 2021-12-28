const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    console.log('welcome to procesos ApiRest');
    res.json({
        mensaje: 'welcome to procesos ApiRest'
    })
})
module.exports = router;
