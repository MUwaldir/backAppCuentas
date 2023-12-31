//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
require('dotenv').config();
const {PORT} = process.env;
const server = require('./src/app.js');
const { crearAdministrador } = require('./src/controllers/Admin/createAdmin.js');
const { conn } = require('./src/db.js');
console.log(PORT)
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  crearAdministrador()
  server.listen(PORT, () => {
    console.log('%s listening at '+ PORT); // eslint-disable-line no-console
  });
});
