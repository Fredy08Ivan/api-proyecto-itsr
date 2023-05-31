import routexp from 'express-promise-router';


import autenticacion from './auth.routes';
import Personas from './persona.routes';
import User from './user.routes';

import Materia from'./materia.routes';
import Personal from './personal.routes';
import Aula from './aula.routes';
import Grupo from './grupo.routes';
import Alumno from './alumnos.routes'

import conPop from './consultarPopula';
import Carrera from './carrera.routes';


const router = routexp();


router.use('/auth',autenticacion);
router.use("/persona",Personas);
router.use("/user", User)

router.use("/materia", Materia);
router.use("/personal", Personal);
router.use("/aula", Aula);
router.use("/grupo", Grupo);
router.use("/alumno", Alumno);

router.use('/populate', conPop)
router.use('/carrera', Carrera)

export default router;