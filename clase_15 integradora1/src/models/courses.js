import mongoose from 'mongoose';

const coursesCollection = 'Courses';

const coursesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    teacher: {
        type: String,
        required: true,
    },
    students: {
        type: Array,
        default: []
    }
})

export const coursesModel = mongoose.model(coursesCollection, coursesSchema);