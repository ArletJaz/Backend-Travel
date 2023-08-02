const express = require('express');
const router = express.Router();
const travelController = require("../controllers/travel.controllers");

// Ruta para crear un nuevo viaje
router.post('/', travelController.crearViaje);

// Ruta para obtener todos los viajes
router.get('/', travelController.obtenerViajes);

// Ruta para obtener un viaje por su ID
router.get('/:id', travelController.obtenerViajePorId);

// Ruta para actualizar un viaje existente
router.put('/:id', travelController.actualizarViaje);

// Ruta para eliminar un viaje existente
router.delete('/:id', travelController.eliminarViaje);

module.exports = router;
