const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Usuario = require('./conta')
const conta = Usuario(sequelize, Sequelize.DataTypes)


const Cliente = require('./cliente')
const cliente = Cliente(sequelize, Sequelize.DataTypes)

const Endereco = require('./endereco')
const endereco = Endereco(sequelize, Sequelize.DataTypes)

const HistoricoMov = require('./historico_movim')
const historicoMov = HistoricoMov(sequelize, Sequelize.DataTypes)

const TipoMov = require('./tipo_mov')
const tipoMov = TipoMov(sequelize, Sequelize.DataTypes)

//definir constraints de foreign key no Banco de Dados

conta.belongsTo(cliente, {
    foreignKey: "fk_cod_cli", 
  });

  endereco.belongsTo(cliente, {
    foreignKey: "fk_cod_cli", 
  });

  historicoMov.belongsTo(conta, {
    foreignKey: "fk_cod_cli", 
  });

  tipoMov.belongsTo(conta, {
    foreignKey: "fk_cod_hist_mov",
  });

const db = {
    conta,
    cliente,
    endereco,
    historicoMov,
    tipoMov,
    sequelize
}

module.exports = db