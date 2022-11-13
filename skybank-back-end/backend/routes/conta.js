const express = require('express');

const contaController = require('../controllers/conta');

const router = express.Router();

router.get('/:id', contaController.getConta);

router.get('/', contaController.getLogin);

router.get('/', contaController.getTransferencia);

router.post('/', contaController.postGrocery);

router.put('/', contaController.putGrocery);

router.delete('/:id', contaController.deleteGrocery);

module.exports = router;
