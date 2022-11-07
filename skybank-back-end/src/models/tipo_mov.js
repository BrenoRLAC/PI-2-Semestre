const tipoMov = (sequelize, DataTypes) => {

    const TipoMov = sequelize.define('tipo_mov', {
        id_movim: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        pix: {
               type: DataTypes.STRING(40),
               AllowNull: false
           }, 
           transferencia: {
               type: DataTypes.STRING(30),
               AllowNull: false
           },
            
           fk_cod_hist_mov: {
               type: DataTypes.INTEGER,
               AllowNull: false
           },     

           
        }, {
            timestamps: false,
           createdAt: false,
           updatedAt: false,
               tableName: 'tipo_mov'
           })
           return TipoMov
       }
      
   module.exports = tipoMov