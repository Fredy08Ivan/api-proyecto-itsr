import Routex from 'express-promise-router';
import aulasControllers from '../controllers/aulas.controllers';

const router = Routex();

router.post('/guardar', aulasControllers.addAula);
router.get('/consultar', aulasControllers.verAulas);
router.get('/consultarUno/:id', aulasControllers.listarUnAula);
router.delete('/eliminar/:id',aulasControllers.elimnarAula)
router.put('/actualizar/:id', aulasControllers.actualizarDatos);

export default router;