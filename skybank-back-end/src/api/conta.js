const express = require('express')
const router = express.Router()
const {conta} = require('../models/conta')
const {contaDao} = require('../models/contaDao')

router.get('/', (req, res) =>{
    res.json(conta)
    
})

router.post('/', async (req, res) =>{
    await conta.create({})
    response.send
    
})
module.exports = router