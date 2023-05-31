import mongoose, { Schema } from "mongoose";

const aulas = new Schema({
    nombre:{type:String},
    capacidad:{type:String},
    edificio:{type:String},
    planta:{type:String}
});

const Aulas = mongoose.model("aulas", aulas);
export default Aulas;