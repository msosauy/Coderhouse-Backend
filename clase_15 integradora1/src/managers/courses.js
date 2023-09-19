import { coursesModel } from "../models/courses.js";
import { usersModel } from "../models/users.js";

export default class Courses {
    constructor() {
    }

    getAll = async () => {
        const courses = await coursesModel.find()
        return courses.map(cours => cours.toObject());
    }

    saveCourse = async (course) => {
        try {
            const result = await coursesModel.create(course);
            return result;
        } catch (error) {
            throw error;
        }
    }

    addUserToCourse = async (idCourse, idUser) => {
        try {
            const user = await usersModel.findOne({ _id: idUser })
            const course = await coursesModel.findOne({ _id: idCourse });
    
            course.students.push({
                first_name: user.first_name,
                last_name: user.last_name
            });
            user.courses.push(course.title)
    
            await usersModel.updateOne({_id: idUser}, user);
            await coursesModel.updateOne({_id: idCourse}, course);
            return;
        } catch (error) {
            throw error;
        }

    }

}