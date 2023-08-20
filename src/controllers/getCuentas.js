// const { Cliente, Cuenta } = require('../db');
// const getCuentas = async (req, res) => {
//     try {
//       // Realizar la consulta incluyendo la relación entre las tablas 
//     //   const Cuentas = await Cliente.findAll({
//     //     include: [Cuenta],
//     //   });

//     const Cuentas = await Cuenta.findAll();

  
  
//       res.status(200).json(Cuentas);
//     } catch (error) {
//       console.error('Error al obtener la información:', error);
//       res.status(500).json({ msg: error.message });
//     }

// }

// module.exports = getCuentas;


// otro metodo 

const { Cliente, Cuenta } = require('../db');

const getCuentas = async (req, res) => {
  try {
      const cuentas = await Cuenta.findAll({
          include: [{ model: Cliente, attributes: ['nombre'] }],
        });
 
    // const dataCuentas = await Promise.all(cuentas.map((cuenta) => {
     
    //   if (cuenta && cuenta.estado === 1) {
    //     return {
    //       id: cuenta.id,
    //       nombre: cuenta.Cliente.nombre,
    //       monto: cuenta.monto,
    //       descripcion: cuenta.descripcion,
    //       fecha: cuenta.fecha,
          
    //     };
    //   }
    // }));
    const dataCuentas = cuentas
      .filter((cuenta) => cuenta.estado === 1)
      .map((cuenta) => ({
        id: cuenta.id,
        nombre: cuenta.Cliente.nombre,
        monto: cuenta.monto,
        imagen:cuenta.imagen,
        descripcion: cuenta.descripcion,
        fecha: cuenta.fecha,
      }))
      .sort((a, b) => a.id - b.id); // Ordenar por el campo "id"

    if (dataCuentas.length === 0) {
      res.status(200).json({ msg: "NO HAY CUENTAS" });
    } else {
      res.status(200).json(dataCuentas);
    }
  } catch (error) {
    console.error('Error al obtener la información:', error);
    res.status(500).json({ error: 'Error al obtener la información.' });
  }
};

module.exports = getCuentas;
