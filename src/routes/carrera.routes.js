import Routex from 'express-promise-router';

import carreraControllers from '../controllers/carrera.controllers';

const router = Routex();

router.post('/guardar', carreraControllers.addCarrera);
router.get('/consultar', carreraControllers.consultaCarrera);
router.delete('/eliminar/:id', carreraControllers.elimnarCarrera);
router.put('/actualizar/:id',carreraControllers.updateCarrera);
router.get('/consultarUna/:id', carreraControllers.listaCarrera);

export default router;