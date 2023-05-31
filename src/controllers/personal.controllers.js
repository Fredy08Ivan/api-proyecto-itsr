import models from "../models";

export default{
    addPersonal: async(req, res, next)=>{
        try{
            const{
                nombre,
                apellidos,
                telefono,
                sexo,
                clave,
                fechNac,
                direccion,
                rol,
                descripcion,
                carrera
            }=req.body;

            const personal = new models.Personal({
                nombre,
                apellidos,
                telefono,
                sexo,
                clave,
                fechNac,
                direccion,
                rol,
                descripcion,
                carrera
            });

            // personal.filename= req.file.filename;
            // personal.path = 'public/imagenes'+req.file.filename;

            const guardar = await personal.save();
            res.status(200).json(guardar);
        }catch(e){
            res.status(500).send({
                message: "Ocurrio un error al conectar con el servidor de BD"
            });
            next(e);
        } 
    },

    consultarPersonal: async(req, res, next)=>{
        try{
            const ver = await models.Personal.find({carrera: req.params.carrera}).populate({path: "carrera"});
            res.json(ver);
        }catch(e){
            res.status(500).send({
                message: "Error al consultar en la BD"
            })
            next(e);
        }
    },

   

    eliminarPersonal : async(req, res, next)=>{
        try{
            const eliminar = await models.Personal.findByIdAndDelete(req.params.id);
            res.status(200).json(eliminar);
        }catch(e){
            res.status(500).send({
                message: "Los datos no se han elimnado"
            });
            next(e);
        }
    },

    listarUnaMateria: async(req, res, next)=>{
        try {
            const listarUno = await models.Personal.findById(req.params.id);
            if(!listarUno){
                res.status(400).send({
                    message: "El resgistro no se ha encontrado"
                });
            }else{
                res.status(200).json(listarUno);
            }
        } catch (e) {
            res.status(500).send({
                message: "Hubo un error en la conexion con la BD"
            });
            next(e)
        }
    },

    actualizarDatos: async(req, res, next)=>{
        try {
            const{
                nombre,
                apellidos,
                telefono,
                sexo,
                clave,
                fechNac,
                direccion,
                rol,
                descripcion
            }=req.body;

            const updatePersonal={
                nombre,
                apellidos,
                telefono,
                sexo,
                clave,
                fechNac,
                direccion,
                rol,
                descripcion
            };
            const update = await models.Personal.findByIdAndUpdate(req.params.id, updatePersonal)
            res.json(update);

        } catch (e) {
            res.status(500).send({
                message:"Hubo un error al actualizar los datos"
            })
            next(e);
        }
    }
}