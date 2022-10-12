const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Usuario = require('./usuario')

const usuario = Usuario(sequelize, Sequelize.DataTypes)

const db = {
    usuario,
    sequelize
}

module.exports = db