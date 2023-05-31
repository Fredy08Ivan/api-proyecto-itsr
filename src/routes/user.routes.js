import routerx from 'express-promise-router';

import * as userCtrl from '../controllers/user.controllers';
import { authjwt, verifySignup } from '../middlewares';

const router=routerx();

router.post('/add',[
    authjwt.verifyToken,
    authjwt.isAdmin,
    verifySignup.checkRolesExisted
], userCtrl.createUser);

export default router;