import routex from 'express-promise-router'
import asiganacionModels from '../controllers/asiganacion.controller'


const router = routex();


//Materias Populate
router.get("/consultaPop/:personal", asiganacionModels.listar);
router.get("/contaUnoPop/:id",asiganacionModels.listarUno);


//Personal Populate



export default router;