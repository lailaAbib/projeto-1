const express = require('express')
const router = express.Router();
const livrosControllers = require('../controllers/livrosControllers.js')

router.get('/livros', livrosControllers.indexAll)
router.post('/livros', livrosControllers.store)
router.put('/livros/:livro_id', livrosControllers.update)
router.delete('/livros/:livro_id', livrosControllers.delete)

module.exports = router