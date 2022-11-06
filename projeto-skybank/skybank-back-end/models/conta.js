const conta = (sequelize, DataTypes) => {

 const Conta = sequelize.define('Conta', {
        numeroConta: {
            type: DataTypes.INTEGER,
            AllowNull: false
        }, 
        fkCodCli: {
            type: DataTypes.INTEGER,
            AllowNull: false
        },
         
        senhaNum: {
            type: DataTypes.INTEGER,
            AllowNull: false
        },
         
        saldoConta: {
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