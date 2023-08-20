const { Cliente, Cuenta } = require('../db');

const getCuentasByCliente = async (req, res) => {

  try {
    const { clienteId } = req.params; // Obtén el ID del cliente desde los parámetros de la solicitud

    const cuentas = await Cuenta.findAll({
      where: { ClienteId: clienteId, estado:1 }, // Filtrar por el ID del cliente
    });

    res.status(200).json(cuentas);
  } catch (error) {
    console.error('Error al obtener la información:', error);
    res.status(500).json({ error: 'Error al obtener la información.' });
  }
};

module.exports = getCuentasByCliente;
