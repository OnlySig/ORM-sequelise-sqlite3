    OQUE EU ESTOU ESTUDANDO
      
  *O que são ORMS e como são utilizados.*

  *Como integrar uma API a um banco.*

  *Como utilizar ORM na integração.*

  *Especificidades no uso do ORM no desenvolvimento de API.*

  *Os métodos utilizados para conectar com um banco.*

  *Principais características de bancos SQL.*

  *Praticar com as principais partes de uma API: modelos, rotas e controllers.*

  *Organizar o código padrão MVC.*

  *Utilizar conceitos de orientação a objetos.*


TECNOLOGIAS USADAS: SQLite, sequelize e Express.

DOC sequelize: https://sequelize.org/docs/v6/getting-started/

 COMANDOS USANDO:

*npm install sequelize@6.32.1 sequelize-cli@6.6.1 sqlite3@5.1.6 --save-exact* <- comando de libs usado nesse projeto.

*npx sequelize-cli init* <- cria 4 pastas nas quais serão usadas para criar e popular o database.

*npx sequelize-cli model:generate --name Pessoa --attributes nome:string,email:string,cpf:string,ativo:boolean,role:string* <- cria modelo pessoas

*npx sequelize-cli db:migrate* <- faz uma migração, cria/modifica um modelo.

se quiser desfazer uma migração: https://sequelize.org/docs/v6/other-topics/migrations/#undoing-migrations

 POPULANDO O BANCO DE DADOS COM SEEDS

*npx sequelize-cli seed:generate --name demo-pessoa* <- vai criar um arquivo na sua pasta seeders, la dentro vc tem q colocar o array/dados do seu banco de dados, da uma olha no meu :)

*npx sequelize-cli db:seed:all* <- quando vc configurar o seu arquivo dentro da pasta seed, vc usa esse comando que ai sim seu banco será "populado" de dados.