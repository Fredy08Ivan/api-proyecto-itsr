import jwt from 'jsonwebtoken';
import config from '../config';
import Users from '../models/user.models';
import Roles from '../models/role.models';

export const verifyToken= async(req,res,next)=>{
    try {
        const token= req.headers["x-access-token"];

        if(!token) return res.status(403).json({message: "No se encuentra el token"});
     
        const decoded = jwt.verify(token,config.SECRET)
        req.userId=decoded.id;
        
        const user=await Users.findById(req.userId,{password:0})
        if(!user) return res.status(404).json({message: "Usuario no encontrado"})
        next();

    } catch (error) {
        return res.status(401).json({message: "Autorizado"})
        
    }
  
}

export const isModerator=async(req,res,next)=>{
    const user= await Users.findById(req.userId);
   const role= await Roles.find({_id:{$in: user.roles}});

   for (let i=0;i<role.length;i++){
    if(role[i].name==="moderator"){
        next();
        return;
    }
   
   }
   return res.status(403).json({message: "Se requiere que sea un moderador o admin"})
}

export const isAdmin=async(req,res,next)=>{
    const user= await Users.findById(req.userId);
   const role= await Roles.find({_id:{$in: user.roles}});

   for (let i=0;i<role.length;i++){
    if(role[i].name==="admin"){
        next();
        return;
    }
   
   }
   return res.status(403).json({message: "Se requiere el rol administrador"})
}