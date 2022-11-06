const express = require('express')
const routers = require('./api')
const {sequelize } = require('./models/index')

const app = express()

app.use(express.json())
app.use('/', routers)

sequelize.sync().then(() => {
    console.log('conectado com o banco de dados')
})

app.listen(3000, () =>{
console.log('rodando');
})