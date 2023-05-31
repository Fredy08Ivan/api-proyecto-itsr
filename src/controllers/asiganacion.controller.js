import mongoose, { Schema } from "mongoose";
import models from "../models";

export default {

  //Consultas de populate de las materias 
  listar: async (req, res, next) => {
    try {
      const materia = await models.Materias.find({personal: req.params.personal}).populate({ path: 'personal' });
      console.log(materia);
      res.json(materia);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error al consultar",
      });
      next(error);
    }
  },

  listarUno : async (req, res, next)=>{
    try {
      const consultar = await models.Materias.findById(req.params.id).populate({path: 'personal'});
      if(!consultar){
        res.status(400).send({
          message : "El registro no existe"
        });
      }else{
        res.status(200).json(consultar);
      }
    } catch (error) {
      res.status(500).send({
        message : "Ocurrio un error al consultar"
      });
      next(error)
    }
  },


  // Consulta populta del personal y carrera
  conPerConPulate: async (req, res , next)=>{
    try {
        const persona = await models.Personal.find({carrera : carrera.params.carrera}).populate({path: 'carrera'});
        console.log(persona);
        req.json(persona);
    } catch (error) {
        res.status(500).send({
            message: "Ocurrio un error al consultar",
        });
        next(error);
    }
},

};
