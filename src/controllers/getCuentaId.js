const { Cliente, Cuenta } = require('../db');

const getCuentaId = async (req, res) => {
  try {

    const {id} = req.params;
    const cuenta = await Cuenta.findByPk(id, {
        include: [{ model: Cliente, attributes: ['nombre'] }],
    });
 
    
      const dataCuenta =  {
          id: cuenta.id,
          nombre: cuenta.Cliente.nombre,
          monto: cuenta.monto,
          descripcion: cuenta.descripcion,
          fecha: cuenta.fecha,
          imagen:cuenta.imagen
          
        };
      
    // dataCuenta = cuenta;

    if (dataCuenta.length === 0) {
      res.status(200).json({ msg: "NO EXISTE LA CUENTA" });
    } else {
      res.status(200).json(dataCuenta);
    }
  } catch (error) {
    console.error('Error al obtener la información:', error);
    res.status(500).json({ error: 'Error al obtener la información.' });
  }
};

module.exports = getCuentaId;
