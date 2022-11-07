const express = require('express')

const loginRouter = require('./conta')

const router = express.Router()

router.use('/conta', loginRouter)

module.exports = router;