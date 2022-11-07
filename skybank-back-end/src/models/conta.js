const conta = (sequelize, DataTypes) => {

 const Conta = sequelize.define('Conta', {
    id_conta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
        nuemro_conta: {
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
            type: DataTypes.STRING,
            AllowNull: false
        }
     }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
            tableName: 'conta'
        })
        return Conta
    }

module.exports = conta