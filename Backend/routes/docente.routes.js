// routes/docente.routes.js
const express = require('express');
const router = express.Router();
const { obtenerDocentes, obtenerDocentePorId, eliminarDocente, actualizarDocente, insertarDocente } = require('../controllers/docente.controller');

router.get('/docente', obtenerDocentes);
router.get('/docente/:id', obtenerDocentePorId);
router.post('/docente', insertarDocente);
router.put('/docente/:id', actualizarDocente);
router.delete('/docente/:id', eliminarDocente);

module.exports = router;
