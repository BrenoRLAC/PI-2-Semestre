const express = require('express')

const loginRouter = require('./usuario')

const router = express.Router()


router.get('/', (request,response) =>{
    response.send('App online!')
})

router.use('/login', loginRouter)

module.exports = router