//Redirecionando as rotas da API RELACIONADA A CADA TELA

const express = require('express');

const contaController = require('../controllers/conta');

const router = express.Router();

//MÉTODO POST PARA ENVIAR AS INFORMAÇÕES DE ATUALIZAÇÃO DA CONTA
router.put('/', contaController.updateClienteConta);

router.post('/', contaController.insertCliente);
module.exports = router;

