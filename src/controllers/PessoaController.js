const Controller = require("./Controller.js");
const PessoaServices = require("../services/PessoaServices.js");

const pessoaServices = new PessoaServices();
class PessoaController extends Controller{
  constructor() {
    super(pessoaServices);
  }

  async getMatriculas(req, res) {
    try {
      const { estudanteId } = req.params
      const listaMatriculas = await pessoaServices.getMatriulasPorEstudante(Number(estudanteId))
      res.status(200).json(listaMatriculas)
    } catch (error) {
      
    }
  }
}
module.exports = PessoaController;