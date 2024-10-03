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
  async getPessoasScopeAll() {
    const listaPessoas = await super.getRegistrosByScope('todosRegistros');
    return listaPessoas;
  }
}

module.exports = PessoaServices