const express = require('express');

const contaController = require('../controllers/conta');

const router = express.Router();

router.put('/', contaController.updateClienteEndereco);

router.post('/', contaController.insertCliente);

module.exports = router;
