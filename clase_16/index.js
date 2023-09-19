import { courseModel } from "./models/courses.js";
import mongoose from "mongoose";
import { studentsModel } from "./models/students.js";

const environment = async () => {
    await mongoose.connect('');
    // const studentPopulate = await studentsModel.findOne({_id:'64f7b8ae8a8bca4986a0e7ce'}).populate('courses.course');
    const student = await studentsModel.findOne({_id:'64f7b8ae8a8bca4986a0e7ce'});
    console.log(student.courses);
}

environment();