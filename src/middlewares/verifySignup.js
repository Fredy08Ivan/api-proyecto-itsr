import {ROLES} from '../models/role.models';
import Users from '../models/user.models';

export const checkDuplicateUserorEmail=async(req,res,next)=>{
    const user=await Users.findOne({username: req.body.username})
    if(user) return res.status(400).json({message: 'El usuario existe'})

    const email = await Users.findOne({email: req.body.email})
    if(email) return res.status(400).json({message:'El email existe'});

    next();
}

export const checkRolesExisted=(req,res,next)=>{
    if(req.body.roles){
        for(let i=0; i<req.body.roles.length;i++){
            if(!ROLES.includes(req.body.roles[i])){

                return res.status(400).json({
                    message:`Role ${req.body.roles[i]} no existe`
                })

            }
        }

    }
    next();
}