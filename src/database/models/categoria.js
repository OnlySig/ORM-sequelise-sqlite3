'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {

    static associate(models) {
      //relação uma para muitos, essa é a ponta "um", essa conexão ficaria + ou - assim:
      //UMA categoria tem vários cursos, porem UM curso pertence a UMA categoria
      Categoria.hasMany(models.Curso, {
        foreignKey: 'categoria_id'
      })
    }
  }
  Categoria.init({
    titulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categorias',
    paranoid: true,
  });
  return Categoria;
};