const express = require('express')
const routers = require('./api')
const {sequelize } = require('./models/index')

const app = express()

app.use(express.json())
app.use('/', routers)

// app.post('/cadastre', (request, response) => {
//     const dadosUsuario = request.body
//     console.log(dadosUsuario)
//     response.send('Usuário cadastrado com sucesso!')
// })
sequelize.sync().then(() => {
    console.log('conectado com o banco de dados')
})

app.listen(3000, () =>{
console.log('rodando');
})