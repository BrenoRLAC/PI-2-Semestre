const histMovimentacao = (sequelize, DataTypes) => {

    const HistMovimentacao = sequelize.define('HistMovimentacao', {
        id_movim: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        data_mov: {
               type: DataTypes.DATE,
               AllowNull: false
           }, 
           tipo_op: {
               type: DataTypes.STRING(20),
               AllowNull: false
           },
            
           conta_dest: {
               type: DataTypes.INTEGER,
               AllowNull: false
           },
            
           fk_cod_conta: {
               type: DataTypes.INTEGER,
               AllowNull: false
           }
           
        }, {
            timestamps: false,
            createdAt: false,
            updatedAt: false,
               tableName: 'histMovimentacao'
           })
           return HistMovimentacao
       }
      
   module.exports = histMovimentacao