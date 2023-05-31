import mongoose, { Schema } from "mongoose";

const materias= new Schema({
    nomMater:{type:String},
    clave:{type:String},
    creditos:{type:Number},
    numTem:{type:String},
    horaPract:{type:String},
    horaTeoric:{type:String},
    modalidad:{type:String},
    semanas:{type:String},
    personal:[
        {
        type: Schema.ObjectId,
        ref : "personal"
    }
    ]
});


const Materias= mongoose.model('materias', materias);
export default Materias;
