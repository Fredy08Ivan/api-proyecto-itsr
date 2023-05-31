import mongoose, {Schema} from 'mongoose';

const alumno = new Schema({
    matricula:{type:String},
    nombre:{type:String},
    apellidos:{type:String},
    genero:{type:String},
    nacimiento:{type:String},
    telefono:{type:String},
    direccion:{type:String},
    grupo:{type:String},
    image:{type:String}
});

const Alumno = mongoose.model("alumno", alumno);
export default Alumno;