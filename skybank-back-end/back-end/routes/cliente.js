const express = require('express');

const contaController = require('../controllers/conta');

const router = express.Router();

router.get('/:id', contaController.getClienteInfo);

router.put('/:id', contaController.updateCliente);



module.exports = router;
