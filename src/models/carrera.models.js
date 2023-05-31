import mongoose, { Schema } from "mongoose";

const carrera = new Schema({
    clave: {type:String, unique: true},
    nombre: {type:String},
    modalidad: {type:String}
})

const Carrera = mongoose.model('carrera', carrera);
export default Carrera;