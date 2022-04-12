const express = require('express')
const router = express.Router();
const capitulosControllers = require('../controllers/capitulosControllers.js')

router.get('/capitulos', capitulosControllers.indexAll)
router.post('/livro/:livro_id/capitulos', capitulosControllers.store)
router.put('/livro/:capitulo_id/capitulos', capitulosControllers.update)
router.delete('/capitulos/:capitulo_id', capitulosControllers.delete)

module.exports = router