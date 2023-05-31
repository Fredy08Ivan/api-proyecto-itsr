import mongoose,{Schema} from 'mongoose';
import bcrypt from 'bcryptjs';

const users = new Schema({
    username: {
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    roles:[
        {
            ref: "Role",
            type: Schema.Types.ObjectId
        }
    ]
},
{
    timestamps:true,
    versionKey:false
}
);

users.statics.encryptPassword=async(password)=>{
    const salt= await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}
users.statics.comparePassword=async(password,recivePassword)=>{
    return await bcrypt.compare(password,recivePassword)
}

const Users=mongoose.model('usuarios',users);
export default Users;