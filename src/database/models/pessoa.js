'use strict';
const isValido = require("../../utils/validaCpfHelper.js");

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoa.hasMany(models.Curso, {
        foreignKey: 'docente_id'
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        //scope: { status: 'matriculado' },
        as: 'aulasMatriculadas'
      })
    }
  }
  Pessoa.init({
    nome: { // DOC de validations do sequelize: https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 30], //validação se o nome tem q ser maior que 3 e menor que 30.
          msg: "Campo nome deve ter 3 à 30 caracteres!"
        }

      }
    },
    email: { // validations & constraints ; esse campo email está sendo validado se a informação do usuário corresponde como email
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true, 
          msg: 'Formato do email inválido!'
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        cpfIsValid: (cpf) => {
          if(!isValido(cpf)) throw new Error('número de cpf inválido!');
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas',
    paranoid: true, // soft-deletion - doc in README.md
    defaultScope: { // scope de mostrar pessoas que ativo for true. SELECT * FROM `pessoas` AS `Pessoa` WHERE (`Pessoa`.`deletedAt` IS NULL AND `Pessoa`.`ativo` = 1);
      where: {
        ativo: true,
      }
    },
    scopes: {
      todosRegistros: {
        where: {} // esse objeto vazio significa que ele vai filtrar por tudo como se fosse um SELECT * FROM ...
      }
    }
  });
  return Pessoa;
};