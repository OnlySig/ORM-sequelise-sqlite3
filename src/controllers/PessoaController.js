const Controller = require("./Controller.js");
const PessoaServices = require("../services/PessoaServices.js");

const pessoaServices = new PessoaServices();
class PessoaController extends Controller{
  constructor() {
    super(pessoaServices);
  }

  async getMatriculas(req, res) {
    try {
      const { estudanteId } = req.params;
      const listaMatriculas = await pessoaServices.getMatriulasPorEstudante(Number(estudanteId));
      return res.status(200).json(listaMatriculas);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async getAllPessoas(req , res) {
    try {
      const listaPessoas = await pessoaServices.getPessoasScopeAll();
      return res.status(200).json(listaPessoas);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
}
module.exports = PessoaController;