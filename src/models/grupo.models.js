import mongoose, { Schema } from "mongoose";

const grupo = new Schema({
    nombre:{type:String},
    semestre:{type:String},
    turno:{type:String},
    carrera:{type:String},
    image:{type:String}
});

const Grupo = mongoose.model("Grupo",grupo);
export default Grupo;