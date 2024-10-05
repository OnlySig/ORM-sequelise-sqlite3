const conversorStringHelper = require("../utils/conversorStringHelper.js");

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

  async findOneByWhereController(req, res) {
    try {
      const { ...params } = req.params;
      const where = conversorStringHelper(params);
      const oneRegistro = await this.entidadeService.findWhereRegistro(where);
      return res.status(200).json(oneRegistro);
    } catch (error) {
      return res.status(500).json({error: error.message});
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
      const { ...params } = req.params;
      const where = conversorStringHelper(params)
      const isAtualizado = await this.entidadeService.atualizaRegistro(req.body, where);
      if(!isAtualizado) return res.status(400).json({message: "Registro NÃO foi atualizado!"});
      const getInfos = await this.entidadeService.findOneRegistro(Number(params.id));
      return res.status(200).json({ message: "Atualizado com sucesso!", registro: getInfos});
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteController(req, res) {
    try {
      const { ...params } = req.params;
      const where = conversorStringHelper(params);
      await this.entidadeService.deleteRegistro(where);
      return res.status(200).json({message: `${this.entidadeService.model} deletado(a) com sucesso!`});
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = Controller;