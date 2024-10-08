const Services = require("./Services.js");
const dataSource = require("../database/models");

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
    this.matriculaServices = new Services('Matricula');
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
  async cancelaEstudanteEMatriculas(estudanteId) {
    return dataSource.sequelize.transaction(async (transaction) => {
      await super.atualizaRegistro({ 
        ativo: false 
      }, {
        id: estudanteId
      }, transaction);
      await this.matriculaServices.atualizaRegistro({
        status: 'cancelado'
      },{
        estudante_id: estudanteId
      }, transaction);
    })
  }
}

module.exports = PessoaServices