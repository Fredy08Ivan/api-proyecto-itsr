import routerx from 'express-promise-router';

import personalControllers from '../controllers/personal.controllers';

const router = routerx();

router.post('/guardar',personalControllers.addPersonal);
router.get('/consultar/:carrera',personalControllers.consultarPersonal);
router.get('/consultarUno/:id',personalControllers.listarUnaMateria);
router.delete('/eliminar/:id',personalControllers.eliminarPersonal);
router.put('/actualizar/:id',personalControllers.actualizarDatos)

export default router;

