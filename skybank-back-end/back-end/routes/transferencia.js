const express = require('express');

const contaController = require('../controllers/conta');

const router = express.Router();

router.post('/', contaController.getTransferencia);



module.exports = router;