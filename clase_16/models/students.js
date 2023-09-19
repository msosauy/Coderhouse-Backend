import mongoose from "mongoose";

const studentsCollection = 'students';

const studentsSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    courses: {
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'courses'
                }
            }
        ],
        default: []
    }
})

studentsSchema.pre('findOne', function(){
    this.populate('courses.course');
})

export const studentsModel = mongoose.model(studentsCollection, studentsSchema); 