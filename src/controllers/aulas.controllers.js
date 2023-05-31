import { model } from "mongoose";
import models from "../models";


export default{
    addAula: async (req,res,next)=>{
        try{
            const{
                nombre,
                capacidad,
                edificio,
                planta
            }=req.body;

            const aula = new models.Aula({
                nombre,
                capacidad,
                edificio,
                planta
            });

            const guardar = await aula.save();
            res.status(200).json(guardar);
        }catch(e){
            res.status(500).send({
                message:"Ocurrio un error al guardar en el servidor de BD"
            })
            next(e);
        }
    },

    verAulas:async(req, res, next)=>{
        try{
            const ver = await models.Aula.find();
            res.json(ver);
        }catch(e){
            res.status(500).send({
                message: "Error al consultar en las BD"
            })
            next(e);
        }
    },

    elimnarAula:async(req,res,next)=>{
        try{
            const eliminar = await models.Aula.findByIdAndDelete(req.params.id);
            res.status(200).json(eliminar);
        }catch(e){
            res.status(500).send({
                message:"Los datos no se han eliminado"
            });
            next(e);
        }
    },


    listarUnAula:async(req, res,next)=>{
        try{
            const listarUno = await models.Aula.findById(req.params.id);
            if(!listarUno){
                res.status(400).send({
                    message: "El registro no se ha encontrado"
                });
            }else{
                res.status(200).json(listarUno)
            }
        }catch(e){
            res.status(500).send({
                message: "Hubo un error en la conexion con la BD"
            });
            next(e);
        }
    },

    actualizarDatos:async(req, res, next)=>{
        try{
            const{
                nombre,
                capacidad,
                edificio,
                planta
            }=req.body;

            const updateAula={
                nombre,
                capacidad,
                edificio,
                planta
            };

            const update = await models.Aula.findByIdAndUpdate(req.params.id, updateAula);
            res.status(200).json(update)

        }catch(e){
            res.status(500).send({
                message:" Hubo un error al actualizando los datos"
            })
            next(e);
        }
    }
}