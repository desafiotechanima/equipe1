class Tabelas {
  init(conexao) {
    this.conexao = conexao;

    this.criarUsuarios();
  }

  criarUsuarios() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Usuarios (matricula int NOT NULL PRIMARY KEY AUTO_INCREMENT, nome varchar(50) NOT NULL, nomeFilho varchar(50), email text)";

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Usuarios criada com sucesso");
      }
    });
  }
}

module.exports = new Tabelas();
