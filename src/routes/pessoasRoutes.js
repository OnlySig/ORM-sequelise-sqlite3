const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router
  .get('/pessoas', (req, res) => pessoaController.findAllController(req, res))
  .get('/pessoas/all', (req, res) => pessoaController.getAllPessoas(req, res))
  .get('/pessoas/:id', (req, res) => pessoaController.findOneByIdController(req, res))
  .post('/pessoas', (req, res) => pessoaController.createController(req, res))
  .put('/pessoas/:id', (req, res) => pessoaController.atualizaController(req, res))
  .delete('/pessoas/:id', (req, res) => pessoaController.deleteController(req, res))
  .get('/pessoas/:estudante_id/matriculas', (req, res) => pessoaController.getAtivasMatriculas(req, res))
  .get('/pessoas/:estudante_id/matriculas/all', (req, res) => pessoaController.getAllMatriculas(req, res))
  .get('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.findOneByWhereController(req, res))
  .post('/pessoas/:estudante_id/matriculas', (req, res) => matriculaController.createController(req, res))
  .put('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.atualizaController(req, res))
  .delete('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.deleteController(req, res)); // parâmtros de rotas: :estudante_id && :id

module.exports = router;