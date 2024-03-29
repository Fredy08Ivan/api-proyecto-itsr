import User from '../models/user.models';
import jwt from 'jsonwebtoken';
import config from '../config';
import Role from '../models/role.models';

export default{
     signUp: async(req,res,next)=>{
        try{
        const {username,email,password,roles}=req.body;

       

        const newUser= new User({
            username,
            email,
            password: await User.encryptPassword(password)
        })

        if(roles){
          const foundRoles=await Role.find({name:{$in:roles}})
          newUser.roles=foundRoles.map(role=>role._id)
        }else{
          const role=await Role.findOne({name:"user"})
          newUser.roles=[role._id]
        }

       const saveduser= await newUser.save();
       console.log(saveduser);

       const token= jwt.sign({id: saveduser._id}, config.SECRET, {
        expiresIn: 86400
       });

       
       res.status(200).json({token:token})

    
        }catch(e){
          res.status(500).send({
            message:"Error al guardar"
          })
          next(e)
            
        }
        
        
        
        res.json("signUp");
    },



     signIn: async(req,res)=>{
        const userFound= await User.findOne({email: req.body.email}).populate("roles");
     
        if(!userFound) return res.status(400).json({message:"usuario no encontrado"});

        const matchPassword=await User.comparePassword(req.body.password,userFound.password);

        if (!matchPassword)return res.status(401).json({token:null, message:"Password invalido"})

        const token=jwt.sign({id: userFound._id}, config.SECRET,{
          expiresIn:86400
        })

        res.json({token})

          }

} 