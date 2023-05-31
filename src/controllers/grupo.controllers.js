import { model } from "mongoose";
import models from "../models";

export default{
    addGrupo: async (req,res, next)=>{
        try{
            const{
            nombre,
            semestre,
            turno,
            carrera
            }=req.body;
            
            const grupo = new models.Grupo({
                nombre,
                semestre,
                turno,
                carrera
            });

            const guardar = await grupo.save();
            res.status(200).json(guardar);
        }catch(e){
            res.status(500).send({
                message: "Ocurrio un error al guardar en el servidor de BD"
            })
            next(e);
        }
    },

    consultaGrupo: async(req, res, next)=>{
        try{
            const ver = await models.Grupo.find();
            res.json(ver);
        }catch(e){
            res.status(500).send({
                message: "Error al consultar en la BD"
            })
            next(e);
        }
    },

    eliminarGrupo: async(req,res,next)=>{
        try{
            const eliminar = await models.Grupo.findByIdAndDelete(req.params.id);
            res.status(200).json(eliminar);
        }catch(e){
            res.status(500).send({
                message:"Los datos no se han eliminado"
            });
            next(e);
        }
    },

    listarUnGrupo: async(req, res,next)=>{
        try{
            const listarUno = await models.Grupo.findById(req.params.id);
            if(!listarUno){
                res.status(400).send({
                    message:"El registro no se ha encontrado"
                });
            }else{
                res.status(200).json(listarUno);
            }
        }catch(e){
            res.status(500).send({
                message:"Hubo un error en la conexion con la BD"
            });
            next(e);
        }
    },

    actualizarDatos: async(req,res, next)=>{
        try{
            const{
                nombre,
                semestre,
                turno,
                carrera,
                image
            }=req.body;

            const updateGrupo={
                nombre,
                semestre,
                turno,
                carrera,
                image
            };
            const update = await models.Grupo.findByIdAndUpdate(req.params.id, updateGrupo);
            res.status(200).json(update)
        }catch(e){
            res.status(500).send({
                message:"Hubo un error al actualizar los datos"
            })
            next(e);
        }
    }
}