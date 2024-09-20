class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }
  async findAll(req, res) {
    try {
      const listRegistros = await this.entidadeService.findAllRegistros();
      return res.status(200).json(listRegistros);
    } catch (error) {
      
    }
  }
}

module.exports = Controller;