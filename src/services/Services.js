const dataSource = require("../database/models");

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel
  }
  async findAllRegistros() {
    return dataSource[this.model].findAll();
  }
  async getRegistrosByScope(scope) {
    return dataSource[this.model].scope(scope).findAll({});
  }
  async findOneRegistro(id) {
    return dataSource[this.model].findByPk(id);
  }
  async findWhereRegistro(where) {
    return dataSource[this.model].findOne({
      where: { ...where }
    });
  }
  async createRegistro(body) {
    return dataSource[this.model].create(body);
  }
  async deleteRegistro(where) {
    return dataSource[this.model].destroy({ 
      where: { ...where } 
    });
  }
  async atualizaRegistro(body, where) {
    const listadeRegistrosAtualizados = await dataSource[this.model].update(body , { 
      where: { ...where }
    });
    if(listadeRegistrosAtualizados[0] === 0) return false;
    return true;
  }
}

module.exports = Services;