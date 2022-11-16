const express = require('express');

const contaController = require('../controllers/conta');

const router = express.Router();

router.put('/', contaController.updateClienteEndereco);



module.exports = router;
