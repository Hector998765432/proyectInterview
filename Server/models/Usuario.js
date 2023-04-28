const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    edad: {
        type: Number,
        required: true,
        trim: true
    },
    sexo: {
        type: Boolean,
        required: true,
        trim: true
    },
    telefono : {
        type: String,
        required: true,
        trim: true,
        trim: true,
        unique: true
    },
    status : {
        type: Number,
        default: 0 
    },
    creado: {
        type: Date,
        default: Date.now() 
    },
    nacimiento: {
        type: Date,
        default: Date.now(),
        required: true,
        trim: true,
    }
});

module.exports = mongoose.model('Usuario', UsuariosSchema);