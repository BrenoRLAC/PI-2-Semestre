const express = require('express');

const bodyParser = require('body-parser');

const loginRouters = require('./routes/conta');

const clienteRouters = require('./routes/cliente');

const transferenciaRouters = require('./routes/transferencia');

const errorController = require('./controllers/error');

const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/login', loginRouters);

app.use('/cliente', clienteRouters);

app.use('/transferencia', transferenciaRouters);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`listening on port ${ports}`));
