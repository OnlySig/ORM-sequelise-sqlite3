const dataSource = require("../database/models");

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel
  }
  async findAllRegistros() {
    return dataSource[this.model].findAll();
  }
  async findOneRegistro(id) {
    return dataSource[this.model].findByPk(id);
  }
  async createRegistro(body) {
    return dataSource[this.model].create(body);
  }
  async deleteRegistro(id) {
    return dataSource[this.model].destroy({ where: { id } })
  }
  async atualizaRegistro(body, id) {
    const listadeRegistrosAtualizados = await dataSource[this.model].update(body , { where: { id: id } });
    if(listadeRegistrosAtualizados[0] === 0) return false 
    return true
  }
}

module.exports = Services;