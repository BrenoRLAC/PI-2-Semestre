const db = require('../util/database');

module.exports = class Cliente {
    constructor(id, senha) {
      this.id = id;
      this.senha = senha

    }

  static getClienteInfo(id) {
    return db.execute('select endereco, bairro, cidade, cep, uf, complemento from endereco where cod_cli = ?', [id]);
  }

  static updateCliente(id, endereco, bairro, cidade, cep, uf) {
    return db.execute('updade endereco set endereco = ?, bairro = ?, cidade = ?,cep = ?, uf = ? where cod_end = ?', [id,endereco, bairro, cidade, cep, uf]);
    
  }

};