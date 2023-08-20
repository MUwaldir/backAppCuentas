const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Administrador } = require('../../db'); // Asegúrate de importar el modelo Administrador adecuadamente

const router = express.Router();

// Ruta para validar el token
const validarToken =  async (req, res) => {
  const { token } = req.body;

  try {
    // Verificar el token con la clave secreta utilizada al firmar el token
    const decoded = jwt.verify(token, 'clave_secreta_del_token');

    // Buscar el administrador en la base de datos por su ID (que está en el token)
    const administrador = await Administrador.findOne({ where: { id: decoded.id } });

    if (!administrador) {
      return res.status(401).json({ mensaje: 'Token inválido - Administrador no encontrado' });
    }

    // Si el administrador existe, el token es válido y el usuario está autenticado
    res.status(200).json({ mensaje: 'Token válido - Autenticación exitosa' });
  } catch (error) {
    console.error('Error al verificar el token:', error);
    res.status(500).json({ mensaje: 'Error al verificar el token' });
  }
};

module.exports = validarToken;
