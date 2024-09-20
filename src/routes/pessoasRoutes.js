const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const pessoaController = new PessoaController();
const router = Router();

router
  .get('/pessoas', (req, res) => pessoaController.findAllController(req, res))
  .get('/pessoas/:id', (req, res) => pessoaController.findOneByIdController(req, res))
  .post('/pessoas', (req, res) => pessoaController.createController(req, res))
  .put('/pessoas/:id', (req, res) => pessoaController.atualizaController(req, res))
  .delete('/pessoas/:id', (req, res) => pessoaController.deleteController(req, res));
module.exports = router