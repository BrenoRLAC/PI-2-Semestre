const express = require('express')
const router = express.Router()
const {conta} = require('../models/conta')
// const {contaDao} = require('../models/contaDao')
const ContaService = require('../service/contas')

const contaService = new ContaService(conta)

router.get('/', async (req, res) =>{
    const conta = await contaService.get()
    res.json(conta)
    
})

// router.post('/', async (req, res) =>{
//     await conta.create({})
//     response.send
    
// })
module.exports = router