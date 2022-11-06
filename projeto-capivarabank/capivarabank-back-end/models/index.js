const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Usuario = require('./conta')

const conta = Usuario(sequelize, Sequelize.DataTypes)


const db = {
    conta,
    sequelize
}

module.exports = db