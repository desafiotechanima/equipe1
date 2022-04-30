const conexao = require("./infraestrutura/conexao");
const Tabelas = require("./infraestrutura/tabelas");
const usuariosController = require("./controllers/usuarios");
const Usuario = require("./models/usuarios");


const urlsGet = [];
const urlsPost = [];
const urlsPut = [];
const urlsDelete = [];

usuariosController &&
  usuariosController({
    get: (url) => urlsGet.push(url),
    put: (url) => urlsPut.push(url),
    post: (url) => urlsPost.push(url),
    delete: (url) => urlsDelete.push(url),
  });

describe("Teste", () => {

  test("Crie a tabela Usuarios", () => {
    expect(Tabelas.criarUsuarios).toBeDefined();
  });

  test("API de Busca de Usuário", () => {
    expect(urlsGet.find((url) => url === "/usuarios/:id")).toBeDefined();
  });
});

describe("Teste2", () => {

  test("API de Criação Usuário", () => {
    expect(urlsPost.find((url) => url === "/usuarios")).toBeDefined();
  });

  test("API de Alteração de Usuário", () => {
    expect(urlsPut.find((url) => url === "/usuarios/:id")).toBeDefined();
  });

  test("API de Listagem de Usuários", () => {
    expect(urlsGet.find((url) => url === "/usuarios")).toBeDefined();
  });

  test("API de Exclusão de Usuários", () => {
    expect(urlsDelete.find((url) => url === "/usuarios/:id")).toBeDefined();
  });
});

describe("Teste3", () => {
  test("API de Busca de Usuários pelo Nome", () => {
    expect(urlsGet.find((url) => url === "/usuarios/nome/:nome")).toBeDefined();
  });

  
});
