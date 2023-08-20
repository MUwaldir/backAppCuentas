const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Cuenta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    monto: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    fecha: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    estado: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
  }
  ,
  {
    timestamps: false,
  });
};