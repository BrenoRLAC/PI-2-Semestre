const Conta = require('../models/conta');
const Cliente = require('../models/cliente');
//Função que faz com que a senha se torne um hash em MD5
const hash = require('object-hash');

exports.getLogin = async (req, res, next) => {
  try {
    //Lógica para validar a senha ja registrada e em transformada em Hash MD5.
    var hashSenha = hash.MD5(req.body.senha);

    var senha = '81dc9bdb52d04dc20036dbd8313ed055';

    var comparar = hashSenha.localeCompare(senha)
    
    if(comparar == -1){
      const loginUsuario = await Conta.getLogin(req.body.id, req.body.email, senha);    
       res.status(200).json(loginUsuario);
    }
    else{
    res.status(200).json("Usuário ou senha inválidos.");
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getTransferencia = async (req, res, next) => {
  try {
    // TIPOS DE TRANSFERENCIAS
    // 1 = PIX
    // 2 = TRANSFERENCIA  
    //3 - DEPOSITAR
    // 4 - SACAR
    var hashSenha = hash.MD5(req.body.senha);

    var senha = '81dc9bdb52d04dc20036dbd8313ed055';

    var comparar = hashSenha.localeCompare(senha)

    if(comparar == -1){
      const valorSaldo =  await Conta.getSaldoClienteAtual(req.body.id);
      const valorSaldoAtual = valorSaldo[0][0].saldo_conta;
      const valorRequerido = req.body.valor;

      if(req.body.operacao == 1){
          if(valorSaldoAtual >= valorRequerido){
            const transferirPix = await Conta.setTransferenciaPix(req.body.valor, req.body.id);
            res.status(200).json("Operação efetuada com sucesso");
          }else{
            res.status(200).json("Operação inválida")
          }
      }
      if(req.body.operacao == 2){
        if(valorSaldoAtual >= valorRequerido){
        const transferencia = await Conta.setTransferencia(req.body.valor, req.body.id);
        res.status(200).json("Operação efetuada com sucesso");
        }
        else{
          res.status(200).json("Operação inválida")
        }
      }
     
      
      if(req.body.operacao == 3){
      
        const setDeposito = await Conta.setDeposito(req.body.valor,req.body.id);
        res.status(200).json("Operação efetuada com sucesso");
      }
     
      if(req.body.operacao == 4){
        if(valorSaldoAtual >= valorRequerido){
        const saque = await Conta.setSaque(req.body.valor, req.body.id);
        res.status(200).json("Operação efetuada com sucesso");
        }
        else{
          res.status(200).json("Operação inválida")
        }
      }   
    }
    else{
    res.status(200).json("Usuário ou senha inválidos.");
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


exports.updateCliente = async (req, res, next) => {
  try {
    const login = await Cliente.updateCliente(req.body.id, req.body.endereco, req.body.bairro, 
      req.body.cidade, req.body.cep, req.body.uf);
    res.status(200).json(login);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getClienteInfo = async (req, res, next) => {
  try {
    const clienteInfo = await Cliente.getClienteInfo(req.params.id);
    res.status(200).json(clienteInfo);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


