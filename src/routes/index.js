const express = require("express");
const pessoas = require("./pessoasRoutes.js");
const categorias = require("./categoriasRoutes.js")
const cursos = require("./cursosRoutes")

const app = (app) => {
  app.route("/").get((req, res)=>res.status(200).send("Bem vindo ao cursos de sequelize e express!"));
  app.use(express.json(), pessoas, categorias, cursos);
}

module.exports = app;