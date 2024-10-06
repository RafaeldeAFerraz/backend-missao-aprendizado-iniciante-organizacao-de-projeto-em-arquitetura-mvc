const express = require('express')
const controller = require('./personagem.controller')

const router = express.Router()

function teste(req, res) {
  res.send('Teste')
}

router.get('/', controller.readAll)
router.get('/:id', controller.readById)
router.post('/', controller.create)
router.put('/:id', controller.updateById)
router.delete('/:id', controller.deleteById)

module.exports = router