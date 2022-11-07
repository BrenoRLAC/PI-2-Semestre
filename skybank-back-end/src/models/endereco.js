const endereco = (sequelize, DataTypes) => {

    const Endereco = sequelize.define('Endereco', {
        id_end: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        endereco: {
               type: DataTypes.STRING,
               AllowNull: false
           }, 
           bairro: {
               type: DataTypes.STRING,
               AllowNull: false
           },
            
           cidade: {
               type: DataTypes.STRING,
               AllowNull: false
           },
            
           cep: {
               type: DataTypes.STRING,
               AllowNull: false
           },
           uf: {
               type: DataTypes.STRING,
               AllowNull: false
           },
           complemento: {
            type: DataTypes.STRING          
        },
        fk_cod_cli: {
            type: DataTypes.INTEGER,
            AllowNull: false    
        }
        }, {
             timestamps: false,
             createdAt: false,
             updatedAt: false,
               tableName: 'endereco'
           })
           return Endereco
       }
      
   module.exports = endereco