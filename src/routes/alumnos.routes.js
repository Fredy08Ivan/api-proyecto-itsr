import Routex from 'express-promise-router';
import alumnosControllers from '../controllers/alumnos.controllers';

const router = Routex();

router.post('/guardar',alumnosControllers.addAlumno);
router.get('/consultar',alumnosControllers.verAlumnos);
router.get('/consultarUno/:id',alumnosControllers.listarUnAlumno);
router.delete('/eliminar/:id',alumnosControllers.eliminarAlumno);
router.put('/actualizar',alumnosControllers.actualizarDatos);

export default router;