// const { Cliente } = require('../db');
// const getClientes = async (req, res) => {
//     try {

//     const Clientes = await Cliente.findAll();

//       res.status(200).json(Clientes);
//     } catch (error) {
//       console.error('Error al obtener la información:', error);
//       res.status(500).json({ msg: error.message });
//     }

// }

// module.exports = getClientes;

const { Cliente, Cuenta } = require('../db');

const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll({
      include: {
        model: Cuenta,
        where: {
          estado: 1,
        },
      },
    });

    res.status(200).json(clientes);
  } catch (error) {
    console.error('Error al obtener la información:', error);
    res.status(500).json({ msg: error.message });
  }
};

module.exports = getClientes;

