//Redirecionando as rotas da API RELACIONADA A CADA TELA


const express = require('express');

const contaController = require('../controllers/conta');

const router = express.Router();

//MÉTODO POST PARA ENVIAR AS INFORMAÇÕES DOS VALORES DE TRANSFERÊNCIA
router.post('/', contaController.getTransferencia);


module.exports = router;