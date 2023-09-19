import mongoose from 'mongoose';

const userCollection = 'Users';

const usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dni: {
        type: Number,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        enum: ["M", "F"]
    },
    courses: {
        type: Array,
        default: []
    },
    photo: String
})

export const usersModel = mongoose.model(userCollection, usersSchema);