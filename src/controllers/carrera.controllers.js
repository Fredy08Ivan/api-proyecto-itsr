import models from "../models";

export default {
  addCarrera: async (req, res, next) => {
    try {
      const { clave, nombre, modalidad } = req.body;

      const carrera = new models.Carrera({
        clave,
        nombre,
        modalidad,
      });

      const guardar = await carrera.save();
      res.status(200).json(guardar);
    } catch (error) {
      res.status(500).send({
        message: "Ah ocurrido un error al conectar con el server de BD",
      });
      next(e);
    }
  },

  consultaCarrera: async (req, res, next) => {
    try {
      const ver = await models.Carrera.find();
      res.json(ver);
    } catch (error) {
      res.status(500).send({
        message: "Error al consultar en la BD",
      });
      next(e);
    }
  },

  listaCarrera: async (req, res, next) => {
    try {
      const listarUna = await models.Carrera.findById(req.params.id);
      if (!listarUna) {
        res.status(400).send({
          message: "El registro no se ha encontrado",
        });
      } else {
        res.status(200).json(listarUna);
      }
    } catch (error) {
      res.status(500).send({
        message: "Hubo un error en la conexion con la BD",
      });
      next(e);
    }
  },

  elimnarCarrera: async (req, res, next) => {
    try {
      const eliminar = await models.Carrera.findByIdAndDelete(req.params.id);
      res.status(200).json(eliminar);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error en la conexion con la BD",
      });
      next(e);
    }
  },


  updateCarrera: async (req, res, next) => {
    try {
      const {
        clave,
        nombre,
        modalidad
      }=req.body;
      
      const actCarrera ={
        clave,
        nombre,
        modalidad
      };


      const update = await models.Carrera.findByIdAndUpdate(req.params.id, updateCarrera);
      res.status(200).json(update);

    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un erro al actualizar los datos"
      })
      next(e);
    }
  },

};
