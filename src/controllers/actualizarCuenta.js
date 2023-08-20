const { Cliente, Cuenta } = require('../db');

const actualizarCuenta = async (req, res) => {
  try {
    const { id } = req.params; // Obtén el ID de la cuenta desde los parámetros de la solicitud
    const { nombre, monto, descripcion } = req.body; // Obtén los datos actualizados desde el cuerpo de la solicitud

    // Busca el cliente por el nombre
    let cliente = await Cliente.findOne({ where: { nombre: nombre } });

    // Si el cliente no existe, crea uno nuevo
    if (!cliente) {
      cliente = await Cliente.create({ nombre: nombre });
    }

    // Busca la cuenta por su ID
    const cuenta = await Cuenta.findByPk(id);
    if (!cuenta) {
      return res.status(404).json({ error: 'Cuenta no encontrada' });
    }

    // Actualiza los campos de la cuenta
    cuenta.monto = monto;
    cuenta.descripcion = descripcion;
    cuenta.ClienteId = cliente.id;

    // Guarda los cambios en la base de datos
    await cuenta.save();

    res.status(200).json(cuenta); // Responde con la cuenta actualizada
  } catch (error) {
    console.error('Error al actualizar la cuenta:', error);
    res.status(500).json({ error: 'Error al actualizar la cuenta.' });
  }
};

module.exports = actualizarCuenta;
