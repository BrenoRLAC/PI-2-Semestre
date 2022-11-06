const { INTEGER } = require("sequelize")

const conta = (sequelize, DataTypes) => {
    const Conta = sequelize.define('Conta', {
        numero_conta: {
            type: DataTypes.INTEGER,
            AllowNull: false
        }, 
        fk_cod_cli: {
            type: DataTypes.INTEGER,
            AllowNull: false
        },
         
        senha_num: {
            type: DataTypes.INTEGER,
            AllowNull: false
        },
         
        saldo_conta: {
            type: DataTypes.INTEGER,
            AllowNull: false
        },
        senha: {
            type: DataTypes.STRING
        }
     }, {
            tableName: 'conta'
        })

        return Conta
    }
   
module.exports = conta