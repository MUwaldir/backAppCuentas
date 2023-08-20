// Importa los modelos definidos en Sequelize
const { Cliente, Cuenta } = require('../db');

// Función para insertar datos en la base de datos
// const createCuenta =  async (req,res) => {

//   try {
//      // Extraer los datos del cuerpo de la solicitud
//      const { nombre, descripcion, monto } = req.body;
//     // Insertar un cliente
//     const cliente = await Cliente.create({
//       nombre,
//     });

//     // Insertar una cuenta para el cliente
//     const cuenta = await Cuenta.create({
//       monto,
//       descripcion,
//     });

//     // Asociar la cuenta al cliente
//     await cliente.addCuenta(cuenta);
//     res.status(200).json({msg:'Se ingreso la cuenta'})
//     console.log('Datos insertados correctamente.');
//   } catch (error) {
//     res.status(400).json({ msg: error.message })
//     console.error('Error al insertar los datos:', error);
//   }
// }


const createCuenta = async (req, res) => {
    try {
      const { nombre, descripcion, monto , imagen} = req.body; // Extraer los datos del cuerpo de la solicitud
      const nombreClienteNormalizado = nombre.toLowerCase();
      // Buscar o crear el cliente existente
    let cliente = await Cliente.findOne({ where: { nombre: nombreClienteNormalizado } });
    if (!cliente) {
      cliente = await Cliente.create({ nombre: nombreClienteNormalizado });
    }
  
      // Insertar una cuenta para el cliente
      const cuenta = await Cuenta.create({ monto, descripcion,imagen });
  
      // Asociar la cuenta al cliente
      await cuenta.setCliente(cliente);
  
      res.status(200).json({ msg: 'Se ingresó la cuenta' });
      console.log('Datos insertados correctamente.');
    } catch (error) {
      res.status(400).json({ msg: error.message });
      console.error('Error al insertar los datos:', error);
    }
  };
  

  


module.exports = createCuenta;

