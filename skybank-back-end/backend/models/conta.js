const db = require('../util/database');

module.exports = class Conta {
  constructor(id, numeroConta, agenciaConta, senha) {
    this.id = id;
    this.numeroConta = numeroConta;
    this.agenciaConta = agenciaConta;
    this.senha = senha;
  }

  static fetchAll(id) {
    return db.execute('SELECT * FROM conta where cod_conta = ?', [id]);
  }

  static getConta(id, numeroConta, agenciaConta, senha) {
    return db.execute('SELECT * FROM conta where cod_conta = ? and numero_conta = ? and agencia_conta = ? and senha = ?',
     [id, numeroConta, agenciaConta ,senha]);
  }
  
  static getLogin(id, email, senha) {
    return db.execute('SELECT * FROM cliente where cod_cli = ? and email = ? and senha = ?',
     [id, email, senha]);
  }

  static getTransferencia(id, numeroConta, agenciaConta, senha, operacao, valor) {
    return db.execute('update conta set saldo_conta = ? ',
     [id, numeroConta, agenciaConta ,senha, operacao]);
  }

  static post(item) {
    return db.execute('INSERT INTO groceries (item) VALUES (?)', [item]);
  }

  static update(id, item) {
    return db.execute('UPDATE groceries SET item = ? WHERE id = ?', [item, id]);
  }

  static delete(id) {
    return db.execute('DELETE FROM groceries WHERE id = ?', [id]);
  }
};
