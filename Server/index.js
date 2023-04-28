require('dotenv').config({ path: 'variables.env' });
const fs = require("fs")
const https = require("https")
const http = require('http');

const PORT = process.env.PORT

const conectarDB = require("./config/db")

/* Coneccion a la base de datos */

conectarDB();

