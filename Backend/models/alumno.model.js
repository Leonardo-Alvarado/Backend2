// models/alumno.model.js
const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    ciudad: { type: String, required: true },
    edad: { type: Number, required: true }
});

module.exports = mongoose.model('Alumno', alumnoSchema);
