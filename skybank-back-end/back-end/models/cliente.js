const db = require('../util/database');

module.exports = class Cliente {
    constructor(id, endereco, bairro, cidade, cep, uf) {
      this.id = id;
      this.endereco = endereco, 
      this.bairro = bairro,
      this.cidade = cidade, 
      this.cep = cep,
      this.uf = uf,
      this.email = email,
      this.senha = senha,
      this.nome = nome

    }

  static getClienteInfo(id) {
    return db.execute('select endereco, bairro, cidade, cep, uf, complemento from endereco where cod_end = ?', [id]);
  }

  static updateClienteEndereco(endereco, bairro, cidade, cep, uf, id) {
    return db.execute('update endereco set endereco = ?, bairro = ?, cidade = ?, cep = ?, uf = ? where cod_end = ? ', 
    [endereco, bairro, cidade, cep, uf, id]);
  }

  static updateClienteConta(nome,email, senha, id) {
    return db.execute("update cliente set nome = ?, email = ?, senha = ? where cod_cli = ?",
    [nome,email,senha, id]);
  }

  static insertCliente(nome,email,cpf,nascimento,senha) {
    return db.execute("insert into cliente (nome,email,cpf_cliente,data_nasc,senha) values (?,?,?,?,?)",
    [nome,email,cpf,nascimento,senha]);
  }

};