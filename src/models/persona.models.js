import mongoose, {Schema} from "mongoose";

const persona=new Schema({
    nombre:{type:String},
    apellidos:{type:String}
});

const Personas=mongoose.model('personas',persona);
export default Personas;