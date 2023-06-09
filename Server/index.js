require('dotenv').config({ path: 'variables.env' });
const http  = require('http');
const app   = require('./express/app');
const PORT  = process.env.PORT

const conectarDB = require("./config/db")

/* Coneccion a la base de datos */
conectarDB();

/* Inicializar server de Express */

let server = http.createServer(app);
server.listen(PORT, () =>{
    console.debug(`Express server iniciaddo en el puerto: ${PORT}.`);
})

