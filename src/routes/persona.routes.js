import routerx from 'express-promise-router';

import personaControllers from '../controllers/persona.controllers';
import {authjwt} from '../middlewares';

const router=routerx();

router.post('/add',[authjwt.verifyToken,authjwt.isModerator],personaControllers.addPersona);


export default router;