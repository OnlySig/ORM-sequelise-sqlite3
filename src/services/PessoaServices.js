const Services = require("./Services.js");

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }
  async getMatriulasAtivasPorEstudante(estudanteId) {
    const getEstudante = await super.findOneRegistro(estudanteId);
    const listaMatriculas = await getEstudante.getAulasMatriculadas(); // essa func automática feita pelos mixins configurados em pessoa.js em models, as: aulasMatriculadas
    return listaMatriculas;
  }
  async getAllMatriculasPorEstudante(id) {
    const getEstudante = await super.findOneRegistro(id);
    const listaAllMatriculas = await getEstudante.getTodasMatriculadas(); // func automática em model pessoas.js linha 23 à 26 com as: todasMatriculadas
    return listaAllMatriculas;
  }
  async getPessoasScopeAll() {
    const listaPessoas = await super.getRegistrosByScope('todosRegistros');
    return listaPessoas;
  }
}

module.exports = PessoaServices