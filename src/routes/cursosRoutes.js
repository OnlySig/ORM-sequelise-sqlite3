const { Router } = require('express')
const CursoController = require('../controllers/CursoController.js')
const router = Router()
const cursoController = new CursoController()

router
  .get('/cursos', (req, res) => cursoController.findAllController(req, res))
  .get('/cursos/:id', (req, res) => cursoController.findOneByIdController(req, res))
  .post('/cursos', (req, res) => cursoController.createController(req, res))
  .put('/cursos/:id', (req, res) => cursoController.atualizaController(req, res))
  .delete('/cursos/:id', (req, res) => cursoController.deleteController(req, res))

module.exports = router