import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import router from './routes';
import { createRole } from "./libs/initialSetup";

//agregado de Multer
// const multer = require ('multer');
// import {v4 as uuid} from 'uuid';

// nuevo
const app=express();
createRole();

app.set ('port', process.env.PORT || 4001)

app.use(morgan("dev"));
app.use(cors());



app.use(express.json());
app.use(express.urlencoded({extended:true}));

//
//agregado
app.use(express.static(path.join(__dirname, 'public')));

// //imagenes
// const storage = multer.diskStorage({
//     destination: (req,file,cb)=>{
//         cb(null,'public/imagenes')
//     },
//     filename:(req, file, cb, filename)=>{
//         cb(null, uuid() + path.extaname(file.originalname));
//     }
// });
// app.use(multer({ storage: storage}).single('image'));
// //

app.use('/api', router);


export default app;