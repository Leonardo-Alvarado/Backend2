// controllers/alumno.controller.js
const Alumno = require('../models/alumno.model');

const obtenerAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find();
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los alumnos' });
    }
};

const obtenerAlumnoPorId = async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id);
        if (!alumno) {
            return res.status(404).json({ error: 'Alumno no encontrado' });
        }
        res.json(alumno);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el alumno' });
    }
};

const insertarAlumno = async (req, res) => {
    try {
        const nuevoAlumno = new Alumno(req.body);
        const alumnoGuardado = await nuevoAlumno.save();
        res.status(201).json(alumnoGuardado);
    } catch (error) {
        res.status(500).json({ error: 'Error al insertar el alumno' });
    }
};

const actualizarAlumno = async (req, res) => {
    try {
        const alumno = await Alumno.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!alumno) {
            return res.status(404).json({ error: 'Alumno no encontrado' });
        }
        res.json(alumno);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el alumno' });
    }
};

const eliminarAlumno = async (req, res) => {
    try {
        const alumno = await Alumno.findByIdAndDelete(req.params.id);
        if (!alumno) {
            return res.status(404).json({ error: 'Alumno no encontrado' });
        }
        res.json({ message: 'Alumno eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el alumno' });
    }
};

module.exports = {
    obtenerAlumnos,
    obtenerAlumnoPorId,
    insertarAlumno,
    actualizarAlumno,
    eliminarAlumno
};
