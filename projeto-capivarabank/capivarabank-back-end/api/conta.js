const express = require('express')
const router = express.Router()

router.get('/conta', (request, response) =>{
    response.send('Bem vindo(a)!')
})