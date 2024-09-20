class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }
  async findAllController(req, res) {
    try {
      const listRegistros = await this.entidadeService.findAllRegistros();
      return res.status(200).json(listRegistros);
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor!" });
    }
  }

  async findOneByIdController(req, res) {
    try {
      const { id } = req.params;
      const listRegistros = await this.entidadeService.findOneRegistro(Number(id));
      res.status(200).json(listRegistros);
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor!" });
    }
  }

  async createController(req, res) {
    try {
      await this.entidadeService.createRegistro(req.body);
      res.status(201).json({message: `${this.entidadeService.model} criado(a) com sucesso!`});
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor!" });
    }
  }

  async atualizaController(req, res) {
    try {
      const { id } = req.params;
      const isAtualizado = await this.entidadeService.atualizaRegistro(req.body, Number(id));
      if(!isAtualizado) return res.status(400).json({message: "Registro NÃO foi atualizado!"});
      const getInfos = await this.entidadeService.findOneRegistro(Number(id));
      res.status(200).json({ message: "Atualizado com sucesso!", registro: getInfos});
    } catch (error) {
      
    }
  }

  async deleteController(req, res) {
    try {
      const { id } = req.params;
      await this.entidadeService.deleteRegistro(Number(id));
      res.status(200).json({message: `${this.entidadeService.model} deletado(a) com sucesso!`})
    } catch (error) {
      res.status(500).json({message: "Erro interno do servidor!"});
    }
  }
}

module.exports = Controller;