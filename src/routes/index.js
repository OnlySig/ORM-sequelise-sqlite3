const express = require("express");
const pessoas = require("./pessoasRoutes.js");

const app = (app) => {
  app.route("/").get((req, res)=>res.status(200).send("faz o l jkkkkkkkkk"));
  app.use(express.json(), pessoas);
}

module.exports = app;