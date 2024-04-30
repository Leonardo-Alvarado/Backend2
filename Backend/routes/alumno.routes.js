// routes/alumno.routes.js
const express = require('express');
const router = express.Router();
const { obtenerAlumnos, obtenerAlumnoPorId, eliminarAlumno, actualizarAlumno, insertarAlumno } = require('../controllers/alumno.controller');

router.get('/alumno', obtenerAlumnos);
router.get('/alumno/:id', obtenerAlumnoPorId);
router.post('/alumno', insertarAlumno);
router.put('/alumno/:id', actualizarAlumno);
router.delete('/alumno/:id', eliminarAlumno);

module.exports = router;
