const Travel = require('../modelo/travel');

// Operación CREATE - Crear un nuevo viaje
const crearViaje = async (req, res) => {
  try {
    const nuevoViaje = req.body;
    const viajeCreado = await Travel.create(nuevoViaje);
    res.status(201).json(viajeCreado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el viaje' });
  }
};

// Operación READ - Obtener todos los viajes
const obtenerViajes = async (req, res) => {
  try {
    const viajes = await Travel.find();
    res.status(200).json({
      mensaje: "Lista de viajes",
viajes,
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los viajes' });
  }
};

// Operación READ - Obtener un viaje por su ID
const obtenerViajePorId = async (req, res) => {
  try {
    const id = req.params.id;
    const viaje = await Travel.findById(id);
    
    if (viaje) {
      res.json(viaje);
    } else {
      res.status(404).json({ mensaje: 'Viaje no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el viaje' });
  }
};

// Operación UPDATE - Actualizar un viaje existente
const actualizarViaje = async (req, res) => {
  try {
    const id = req.params.id;
    const datosActualizados = req.body;
    const viajeActualizado = await Travel.findByIdAndUpdate(id, datosActualizados, { new: true });
    
    if (viajeActualizado) {
      res.json(viajeActualizado);
    } else {
      res.status(404).json({ mensaje: 'Viaje no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el viaje' });
  }
};

// Operación DELETE - Eliminar un viaje existente
const eliminarViaje = async (req, res) => {
  try {
    const id = req.params.id;
    const viajeEliminado = await Travel.findByIdAndDelete(id);
    
    if (viajeEliminado) {
      res.json({
        mensaje: "viaje eliminado",
        viajeEliminado
      });
    } else {
      res.status(404).json({ mensaje: 'Viaje no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el viaje' });
  }
};

module.exports = {
  crearViaje,
  obtenerViajes,
  obtenerViajePorId,
  actualizarViaje,
  eliminarViaje
};

