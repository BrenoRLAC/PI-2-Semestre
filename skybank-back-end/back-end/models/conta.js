const db = require('../util/database');
//DEFINIÇÃO DOS ATRIBUTOS NO CONSTRUTOR
module.exports = class Conta {
  constructor(id, numeroConta, agenciaConta, senha) {
    this.id = id;
    this.numeroConta = numeroConta;
    this.agenciaConta = agenciaConta;
    this.valor = valor;
    this.senha = senha;
  }


  //MÉTODOS DE ACESSO AO BANCO DE DADOS
  
  static getLogin(id, email, senha) {
    return db.execute('SELECT * FROM cliente where cod_cli = ? and email = ? and senha = ?',
     [id, email, senha]);
  }

  static getSaldoClienteAtual(id) {
    return db.execute('select saldo_conta from conta where cod_conta = ? ',
     [id]);
  }

  static setTransferenciaPix(valor, id){
    return db.execute('UPDATE conta SET saldo_conta = saldo_conta - ? where cod_conta = ?',
    [valor, id]);
  }
  
  static setTransferencia(valor, id){
    return db.execute('UPDATE conta SET saldo_conta = saldo_conta - ? where cod_conta = ?',
    [valor, id]);
  }

  static setDeposito(valor, id){
    return db.execute('UPDATE conta SET saldo_conta = saldo_conta + ? where cod_conta = ?',
    [valor, id]);
  }

  static setSaque(valor, id){
    return db.execute('UPDATE conta SET saldo_conta = saldo_conta - ? where cod_conta = ?',
    [valor, id]);
  }
};
