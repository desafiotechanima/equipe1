const mysql = require("mysql");

const conexao = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "admin",
  password: "admin",
  database: "admin",
});

module.exports = conexao;
