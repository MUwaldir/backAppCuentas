// Importa los modelos definidos en Sequelize
const { Administrador} = require('../../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const loginAdmin = async (req, res) => {
    const { nombre, contrasena } = req.body;
    console.log('hola'+ nombre)

    try {
      // Buscar el administrador en la base de datos por su nombre
      const administrador = await Administrador.findOne({ where: { nombreAdmin: nombre } });
  
      if (!administrador) {
        return res.status(401).json({ mensaje: 'Nombre de usuario o contraseña incorrectos' });
      }
  
      // Comparar la contraseña ingresada con la contraseña almacenada (hasheada) en la base de datos
      const contrasenaValida = await bcrypt.compare(contrasena, administrador.contrasena);
  
      if (!contrasenaValida) {
        return res.status(401).json({ mensaje: 'Nombre de usuario o contraseña incorrectos' });
      }
  
      // Generar el token de autenticación con una expiración de 24 horas (86400 segundos)
      const token = jwt.sign({ id: administrador.id }, 'clave_secreta_del_token', { expiresIn: '24h' });
  
      res.status(200).json({ mensaje: 'Inicio de sesión exitoso', token });
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      res.status(500).json({ mensaje: 'Error en el servidor' });
    }
   
  };
  

  


module.exports = loginAdmin;

