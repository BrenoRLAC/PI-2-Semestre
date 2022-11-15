const Conta = require('../models/conta');
const Grocery = require('../models/conta');
//Função que faz com que a senha se torne um hash em MD5
const hash = require('object-hash');

exports.getConta = async (req, res, next) => {
  try {
    const allGroceries = await Conta.fetchAll(req.params.id, req.params.login, req.params.senha);
    res.status(200).json(allGroceries);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

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
    // 1 = PIX
    // 2 = TRANSFERENCIA  
    var hashSenha = hash.MD5(req.body.senha);

    var senha = '81dc9bdb52d04dc20036dbd8313ed055';

    var comparar = hashSenha.localeCompare(senha)
    console.log(loginUsuario[0])
    if(comparar == -1){
      const loginUsuario = await Conta.getTransferencia(req.body.id, req.body.numeroConta, req.body.agenciaConta, req.body.operacao, senha);
      console.log(loginUsuario[0])
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

exports.postGrocery = async (req, res, next) => {
  try {
    const postResponse = await Grocery.post(req.body.item);
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.putGrocery = async (req, res, next) => {
  try {
    const putResponse = await Grocery.update(req.body.id, req.body.item);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteGrocery = async (req, res, next) => {
  try {
    const deleteResponse = await Conta.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
