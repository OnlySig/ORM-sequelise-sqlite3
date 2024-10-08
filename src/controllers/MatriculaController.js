const { Sequelize } = require("sequelize");
const MatriculaServices = require("../services/MatriculaServices.js");
const Controller = require("./Controller.js");

const matriculaServices = new MatriculaServices()

class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices)
  }
  async getMatriculaPorEstudante(req, res) {
    try {
      const { estudante_id } = req.params;
      const listaMatriculaEstudante = await matriculaServices.findAndCountServices({
        where: {
          estudante_id: Number(estudante_id),
          status: 'matriculado'
        },
        limit: 4,
        order: [['id', 'DESC']]
      });
      return res.status(200).json(listaMatriculaEstudante);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
  async getCursosLotados(req, res) {
    try {
      const lotacaoCurso = 3;
      const cursosLotados = await matriculaServices.findAndCountServices({
        where: {
          status: 'matriculado'
        },
        attributes: ['curso_id'],
        group: ['curso_id'],
        having: Sequelize.literal(`count(curso_id) >= ${lotacaoCurso}`)
      });
      return res.status(200).json(cursosLotados);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
}

module.exports = MatriculaController