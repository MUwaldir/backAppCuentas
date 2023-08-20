const { Cuenta } = require('../db');

const deleteCuenta = async (req, res) => {
  try {
    const { id } = req.params; // Obtén el ID de la cuenta desde los parámetros de la solicitud



    // Busca la cuenta por su ID
    const cuenta = await Cuenta.findByPk(id);
    if (!cuenta) {
      return res.status(404).json({ error: 'Cuenta no encontrada' });
    }

    // Actualiza los campos de la cuenta
    cuenta.estado = 0;
 

    // Guarda los cambios en la base de datos
    await cuenta.save();
    console.log('cuenta eliminada')
    res.status(200).json(cuenta); // Responde con la cuenta actualizada
  } catch (error) {
    console.error('Error al actualizar la cuenta:', error);
    res.status(500).json({ error: 'Error al actualizar la cuenta.' });
  }
};

module.exports = deleteCuenta;
