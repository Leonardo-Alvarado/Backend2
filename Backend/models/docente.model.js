// models/docente.model.js
const mongoose = require('mongoose');

const docenteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    materia: { type: String, required: true }
});

module.exports = mongoose.model('Docente', docenteSchema);
