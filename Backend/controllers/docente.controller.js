// controllers/docente.controller.js
const Docente = require('../models/docente.model');

const obtenerDocentes = async (req, res) => {
    try {
        const docentes = await Docente.find();
        res.json(docentes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los docentes' });
    }
};

const obtenerDocentePorId = async (req, res) => {
    try {
        const docente = await Docente.findById(req.params.id);
        if (!docente) {
            return res.status(404).json({ error: 'Docente no encontrado' });
        }
        res.json(docente);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el docente' });
    }
};

const insertarDocente = async (req, res) => {
    try {
        const nuevoDocente = new Docente(req.body);
        const docenteGuardado = await nuevoDocente.save();
        res.status(201).json(docenteGuardado);
    } catch (error) {
        res.status(500).json({ error: 'Error al insertar el docente' });
    }
};

const actualizarDocente = async (req, res) => {
    try {
        const docente = await Docente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!docente) {
            return res.status(404).json({ error: 'Docente no encontrado' });
        }
        res.json(docente);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el docente' });
    }
};

const eliminarDocente = async (req, res) => {
    try {
        const docente = await Docente.findByIdAndDelete(req.params.id);
        if (!docente) {
            return res.status(404).json({ error: 'Docente no encontrado' });
        }
        res.json({ message: 'Docente eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el docente' });
    }
};

module.exports = {
    obtenerDocentes,
    obtenerDocentePorId,
    insertarDocente,
    actualizarDocente,
    eliminarDocente
};
