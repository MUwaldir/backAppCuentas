// db/initialData.js (Puedes crear un archivo separado para inicializar datos)
const { Administrador } = require('../../db');
const bcrypt = require('bcrypt');

const crearAdministrador = async () => {
  const nombreUsuario = 'geraldine';
  const contrasenaPredeterminada = '20012001'; // Cambiar a la contrasena que desees utilizar

  // Verificar si el administrador ya existe en la base de datos
  const administradorExistente = await Administrador.findOne({ where: { nombreAdmin: nombreUsuario } });
  if (administradorExistente) {
    return; // El administrador ya existe, no se crea nuevamente
  }

  // Si el administrador no existe, se crea con la contrasena predeterminada hasheada
  const contrasenaHasheada = await bcrypt.hash(contrasenaPredeterminada, 10);

  await Administrador.create({
    nombreAdmin: nombreUsuario,
    contrasena: contrasenaHasheada,
  });
};

module.exports = { crearAdministrador };
