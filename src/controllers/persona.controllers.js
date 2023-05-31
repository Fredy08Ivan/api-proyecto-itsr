import models from '../models';

export default{
    addPersona:async(req,res,next)=>{
    try {
            const {nombre,apellidos}=req.body;
    
            const agregarPersonas=new models.Personas({
                nombre,apellidos
            });
            
            const guardarPersona=await agregarPersonas.save();
            res.status(200).json(guardarPersona);
            console.log(req.body);
        } catch(e){
            res.status(500).send({
                message: "Error"
            })
            next(e)
        }

    }
        
    
    
}