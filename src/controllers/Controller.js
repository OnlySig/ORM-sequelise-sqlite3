class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }
  async findAllController(req, res) {
    try {
      const listRegistros = await this.entidadeService.findAllRegistros();
      return res.status(200).json(listRegistros);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async findOneByIdController(req, res) {
    try {
      const { id } = req.params;
      const listRegistros = await this.entidadeService.findOneRegistro(Number(id));
      return res.status(200).json(listRegistros);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async createController(req, res) {
    try {
      await this.entidadeService.createRegistro(req.body);
      return res.status(201).json({message: `${this.entidadeService.model} criado(a) com sucesso!`});
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async atualizaController(req, res) {
    try {
      const { id } = req.params;
      const isAtualizado = await this.entidadeService.atualizaRegistro(req.body, Number(id));
      if(!isAtualizado) return res.status(400).json({message: "Registro NÃO foi atualizado!"});
      const getInfos = await this.entidadeService.findOneRegistro(Number(id));
      return res.status(200).json({ message: "Atualizado com sucesso!", registro: getInfos});
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteController(req, res) {
    try {
      const { id } = req.params;
      await this.entidadeService.deleteRegistro(Number(id));
      return res.status(200).json({message: `${this.entidadeService.model} deletado(a) com sucesso!`});
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = Controller;