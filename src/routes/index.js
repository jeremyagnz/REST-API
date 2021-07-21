const { Router } = require('express');
const router = Router();

router.get('/test',(req, res) => {
    const data = {
        "name": "Jeremy",
        "Apellido": "Arias"
    };
    res.json(data);
});

module.exports = router;