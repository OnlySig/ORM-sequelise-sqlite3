const Controller = require("./Controller.js");
const PessoaServices = require("../services/PessoaServices.js");

const pessoaServices = new PessoaServices();
class PessoaController extends Controller{
  constructor() {
    super(pessoaServices);
  }

  async getAtivasMatriculas(req, res) {
    try {
      const { estudante_id } = req.params;
      console.log(estudante_id)
      const listaMatriculas = await pessoaServices.getMatriulasAtivasPorEstudante(Number(estudante_id));
      return res.status(200).json(listaMatriculas);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async getAllMatriculas(req, res) {
    try {
      const { estudante_id } = req.params;
      const getMatriculas = await pessoaServices.getAllMatriculasPorEstudante(Number(estudante_id))
      return res.status(200).json(getMatriculas)
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
  async cancelaRegistroEstudante(req, res) {
    try {
      const { estudante_id } = req.params;
      await pessoaServices.cancelaEstudanteEMatriculas(Number(estudante_id));
      return res.status(200).json({message: 'Estudante deletado com sucesso!'})
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
}
module.exports = PessoaController;