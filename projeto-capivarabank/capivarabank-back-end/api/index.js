const express = require('express')

const loginRouter = require('./conta')

const router = express.Router()


router.get('/', (request,response) =>{
    response.send('App online!')
})

router.use('/conta', loginRouter)

module.exports = router;