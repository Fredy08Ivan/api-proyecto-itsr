import routerx from 'express-promise-router';

import authCtrl from '../controllers/auth.controllers';
import { verifySignup } from '../middlewares';

const router=routerx()

router.post('/signup',[verifySignup.checkDuplicateUserorEmail,verifySignup.checkRolesExisted],authCtrl.signUp);
router.post('/signin',authCtrl.signIn);

export default router;