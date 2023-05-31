import Routex from 'express-promise-router';
import grupoControllers from '../controllers/grupo.controllers';


const router = Routex();

router.post('/guardar', grupoControllers.addGrupo);
router.get('/consultar',grupoControllers.consultaGrupo);
router.get('/consultarUno/:id',grupoControllers.listarUnGrupo);
router.delete('/eliminar/:id',grupoControllers.eliminarGrupo);
router.put('/actualizar/:id',grupoControllers.actualizarDatos);


export default router;