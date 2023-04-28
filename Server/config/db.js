const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    let db = process.env.DB_MONGO
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conección a la base de datos exitosa');
    } catch (error) {
        console.log('Error al conectar con la base de datos');
        console.log(error);
        process.exit(1); // detener la app
    }
}

module.exports = conectarDB;