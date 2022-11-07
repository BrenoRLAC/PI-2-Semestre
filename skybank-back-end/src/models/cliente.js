const cliente = (sequelize, DataTypes) => {

    const Cliente = sequelize.define('Cliente', {
        id_cli: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
            nome: {
               type: DataTypes.STRING,
               AllowNull: false
           }, 
           cpf: {
               type: DataTypes.STRING,
               AllowNull: false
           },
            
           data_nasc: {
               type: DataTypes.DATE,
               AllowNull: false
           },
            
           email: {
               type: DataTypes.STRING,
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
               tableName: 'cliente'
           })
           return Cliente
       }
      
   module.exports = cliente