import { model } from "mongoose";
import models from "../models";


export default{

    addMateria:async(req, res, next)=>{
        try{
            const{
                nomMater,
                clave,
                creditos,
                numTem,
                horaPract,
                horaTeoric,
                modalidad,
                semanas,
                personal
            }= req.body;
    
    
            const materia = new models.Materias({
                nomMater,
                clave,
                creditos,
                numTem,
                horaPract,
                horaTeoric,
                modalidad,
                semanas,
                personal
            });
    
            const guardar = await materia.save();
            res.status(200).json(guardar);
        }catch(e){
            res.status(500).send({
                message: 'Ah ocurrido un error al guardar en el server de BD'
            });
            next(e);
        }
    },

    consultaMateria: async(req, res,next)=>{
        try{
            const ver= await models.Materias.find();
            res.json(ver);
        }catch(e){
            res.status(500).send({
                message: "Error al consultar en la BD"
            })
            next(e);
        }
    },

    eliminarMateria: async(req, res, next)=>{
        try{
            const eliminar = await models.Materias.findByIdAndDelete(req.params.id);
            res.status(200).json(eliminar);
        }catch(e){
            res.status(500).send({
                message: "Los datos no se han eliminado"
            });
            next(e);
        }
    },

    listaUnaMateria: async(req, res, next)=>{
        try{
            const listarUno = await models.Materias.findById(req.params.id);
            if(!listarUno){
                res.status(400).send({
                    message: "El registro no se ha encontrado"
                });
            }else{
                res.status(200).json(listarUno);
            }
        }catch(e){
            res.status(500).send({
                message: "Hubo un error en la conexion con la BD"
            });
            next(e);
        }
    },
    

    actualizarDatos: async(req, res, next)=>{
        try{
            const{
                nomMater,
                clave,
                creditos,
                numTem,
                horaPract,
                horaTeoric,
                modalidad,
                semanas
            }=req.body;

            const updateMateria={
                nomMater,
                clave,
                creditos,
                numTem,
                horaPract,
                horaTeoric,
                modalidad,
                semanas
            };
            const update = await models.Materias.findByIdAndUpdate(req.params.id, updateMateria);
            res.status(200).json(update);
           
        }catch(e){
            res.status(500).send({
                message: "Hubo un error al actualizar los datos"
            })
            next(e);
        }
    }

}


