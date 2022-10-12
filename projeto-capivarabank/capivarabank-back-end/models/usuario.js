const usuario = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        usuario: {
            type: DataTypes.STRING
        }, 
        senha: {
            type: DataTypes.STRING
        }
     }, {
            tableName: 'usuario'
        })

        return Usuario

    }
   
module.exports = usuario