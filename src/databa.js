import mongoose from 'mongoose';

mongoose.Promise=global.Promise;
const dbUrl='mongodb://127.0.0.1:27017/tutoria'
//mongodb+srv://admin:ueAO8q63s3Hv8SIU@asistencia.fak7jdz.mongodb.net/?retryWrites=true&w=majority
// const dbUrl='mongodb+srv://admin:ueAO8q63s3Hv8SIU@asistencia.fak7jdz.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbUrl, {useNewUrlParser:true, useUnifiedTopology:true})
.then(mongoose=>console.log('Conectado a la BD en el puerto 27017'))
.catch(err=>console.log(err));

