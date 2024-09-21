const Services = require("./Services.js");

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }
  async getMatriulasPorEstudante(estudanteId) {
    const getEstudante = await super.findOneRegistro(estudanteId)
    const listaMatriculas = await getEstudante.getAulasMatriculadas()
    return listaMatriculas
  }
}

module.exports = PessoaServices