const conexao = require("./infraestrutura/conexao");
const Tabelas = require("./infraestrutura/tabelas");
const customExpress = require("./infraestrutura/customExpress");
const port = 3000;
const Usuario = require("./models/usuarios");

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.raw())

conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("conectado com sucesso");

    Tabelas.init(conexao);

  }
    
});

app.get("/usuarios", (req, res) => {
  Usuario.lista(res);
});

app.get("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);

  Usuario.buscaPorId(id, res);
});

app.get("/usuarios/nome/:nome", (req, res) => {
  Usuario.buscaPorNome(req.params.nome, res);
});

app.post("/usuarios", (req, res) => {
  const usuario = req.body;

  console.log("req", req);
  console.log(req.body);

  Usuario.adiciona(usuario, res);
});

app.put("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const valores = req.body;

  Usuario.altera(id, valores, res);
});

app.delete("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);

  Usuario.deleta(id, res);
});

app.listen(port, () => console.log(`Desafio ouvindo na porta: ${port}`));