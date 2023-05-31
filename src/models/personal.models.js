import mongoose, { Schema } from "mongoose";

const personal = new Schema({
  nombre: { type: String },
  apellidos: { type: String },
  telefono: { type: String },
  sexo: { type: String },
  clave: { type: String },
  fechNac: { type: Date, default: Date.now()},
  direccion: { type: String },
  rol: { type: String },
  descripcion: { type: String },
  carrera:[ {type: Schema.ObjectId, ref: 'carrera'}],

  // //Imagenes
  // filename:{type:String },
  // path:{type:String} ,
  // mimetype:{type:String},
  // size:{type:Number},
  // created_at:{type:Date, default:Date.now()}

  
  
});

const Personal = mongoose.model('personal', personal);
export default Personal;
