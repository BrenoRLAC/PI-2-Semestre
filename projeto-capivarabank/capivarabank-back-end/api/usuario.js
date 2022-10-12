const express = require('express')
const router = express.Router()

router.get('/', (request, response) =>{
    response.send('Bem vindo(a)!')
})

router.post('/', (request, response) =>{
    response.send('Bem vindo(a)!')
})
module.exports = router