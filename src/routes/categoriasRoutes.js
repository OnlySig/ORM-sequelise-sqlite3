const { Router } = require('express')
const CategoriaController = require('../controllers/CategoriaController.js')
const categoriaController = new CategoriaController()
const router = Router()

router
  .get('/categorias', (req, res) => categoriaController.findAllController(req, res))
  .get('/categorias/:id', (req, res) => categoriaController.findOneByIdController(req, res))
  .post('categorias', (req, res) => categoriaController.createController(req, res))
  .put('/categorias/:id', (req, res) => categoriaController.atualizaController(req, res))
  .delete('/categorias/:id', (req, res) => categoriaController.deleteController(req, res));

module.exports = router