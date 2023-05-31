import {model} from "mongoose";
import models from "../models";

export default{
    addAlumno: async (req, res, next)=>{
        try{
            const{
                matricula,
                nombre,
                apellidos,
                genero,
                nacimiento,
                telefono,
                direccion,
                grupo,
                image
            }=req.body;

            const alumno = new models.Alumno({
                matricula,
                nombre,
                apellidos,
                genero,
                nacimiento,
                telefono,
                direccion,
                grupo,
                image
            });
            
            const guardar = await alumno.save()
            res.status(200).json(guardar);
        }catch(e){
            res.status(500).send({
                message: "Ocurrio un error al guardar el servidor de BD"
            })
            next(e)
        }
    },

    verAlumnos:async(req, res, next)=>{
        try{
            const ver = await models.Alumno.find();
            res.json(ver);
        }catch(e){
            res.status(500).send({
                message:"Ocurrio un error al consultar la BD"
            });
            next(e);
        }
    },

    eliminarAlumno:async(req,res,next)=>{
        try{
            const eliminar= await models.Alumno.findByIdAndDelete(req.params.id);
            res.status(200).json(eliminar);
        }catch(e){
            res.status(500).send({
                message:"Los datos no se han eliminado"
            });
            next(e);
        }
    },

    listarUnAlumno:async(req,res,next)=>{
        try{
            const listarUno=await models.Alumno.findById(req.params.id);
            if(!listarUno){
                res.status(400).send({
                    message: "El resgistro no se ha encontrado"
                });
            }else{
                res.status(200).json(listarUno);
            }
        }catch(e){
            res.status(500).send({
                message:"Hubo un error en la conexion con la BD"
            })
            next(e);
        }
    },

    actualizarDatos:async(req, res, next)=>{
        try{
            const{
                matricula,
                nombre,
                apellidos,
                genero,
                nacimiento,
                telefono,
                direccion,
                grupo,
                image
            }=req.body;

            const updateAlumno={
                matricula,
                nombre,
                apellidos,
                genero,
                nacimiento,
                telefono,
                direccion,
                grupo,
                image
            };

            const update = await models.Alumno.findByIdAndUpdate(req.params.id, updateAlumno);
            res.status(200).json(update);
        }catch(e){
            res.status(500).send({
                message:"Hubo un error al actualizar los datos"
            })
            next(e);
        }
    }
    
}