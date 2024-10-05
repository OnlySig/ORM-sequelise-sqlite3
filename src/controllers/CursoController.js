const { Op } = require("sequelize");
const CursoServices = require("../services/CursoServices.js");
const Controller = require("./Controller.js");

const cursoServices = new CursoServices() 

class CursoController extends Controller {
  constructor() {
    super(cursoServices)
  }

  async getCursos(req, res) {
    const { data_inicial, data_final } = req.query; //query params ou string params
    const where = {}
    data_inicial || data_final ? where.data_inicio = {} : null
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null
    data_final ? where.data_inicio[Op.lte] = data_final : null
    // const where = {
    //   data_inicio: {
    //     [Op.gte]: data_inicial,
    //     [Op.lte]: data_final
    //   }
    // }
    try {
      const listaCursos = await cursoServices.findAllRegistros(where);
      return res.status(200).json(listaCursos);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
}

module.exports = CursoController