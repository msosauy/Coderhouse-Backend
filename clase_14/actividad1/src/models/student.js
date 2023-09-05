import mongoose from 'mongoose';

const studentCollection = 'estudiantes';

const studentSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true,
        unique: true
    },
    curso: {
        type: String,
        required: true
    },
    nota: {
        type: Number,
        required: true
    },
    localidad: String
})

export const studentModel = mongoose.model(studentCollection, studentSchema)