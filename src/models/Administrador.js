const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Administrador', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombreAdmin: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  }, {
    timestamps: false,
  }
  );
};
