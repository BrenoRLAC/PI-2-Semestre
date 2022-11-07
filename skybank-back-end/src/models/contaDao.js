const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const ContaDao = sequelize.define('ContaDao', {
  // Atributos do modelo são definidos aqui:
  numeroConta: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  agenciaConta: {
    type: DataTypes.INTEGER,
    allowNull: false
 
  },
  senhaNumero: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
 
});

console.log(ContaDao === sequelize.models.ContaDao);