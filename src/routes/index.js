const { Router } = require('express');
const createCuenta = require('../controllers/createCuenta');
const getCuentas = require('../controllers/getCuentas');
const actualizarCuenta = require('../controllers/actualizarCuenta');
const getClientes = require('../controllers/getClientes');
const getCuentasByCliente = require('../controllers/getCuentasByCliente ');
const deleteCuenta = require('../controllers/deleteCuenta');
const getCuentaId = require('../controllers/getCuentaId');
const loginAdmin = require('../controllers/Admin/loginAdmin');
const validarToken = require('../controllers/Admin/auth');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();
// para cuan se inicia el servidor 
router.get("", (req, res) => res.status(200).send("hi welcome a la aplicacion de cuentas"));
// Configurar los routers
// ruta GET /cuentas
router.get("/cuentas", getCuentas);
// ruta GET /cuenta/:id
router.get("/cuenta/:id", getCuentaId);
// RUTA POST /cuentas
router.post("/cuentas",createCuenta);
// RUTA PUT /cuentas
router.patch("/cuentas/:id", actualizarCuenta);
// RUTA patch /cuenta/delete/:id
router.patch("/cuentadelete/:id", deleteCuenta);

// ruta GET /clientes
router.get("/clientes", getClientes);
// ruta GET /clientes/id para cuentas por cliente
router.get("/clientes/:clienteId", getCuentasByCliente );
// ruta usuario
router.post("/login",loginAdmin);
router.post('/validar-token',validarToken);
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
