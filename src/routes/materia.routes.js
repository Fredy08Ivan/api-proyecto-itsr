import Routex from 'express-promise-router';
import materiasControllers from '../controllers/materias.controllers';



const router= Routex();


router.post('/guardar',materiasControllers.addMateria);
router.get('/consultar',materiasControllers.consultaMateria);
router.get('/consultarUno/:id',materiasControllers.listaUnaMateria);
router.delete('/eliminar/:id',materiasControllers.eliminarMateria);
router.put('/actualizar/:id',materiasControllers.actualizarDatos);


export default router;