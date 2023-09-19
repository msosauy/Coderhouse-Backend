import { Router } from "express";
import Users from "../managers/users.js";
import Courses from "../managers/courses.js";

const router = Router();
const usersManager = new Users();
const coursesManager = new Courses();

router.get('/users', async(req,res)=> {
    const users = await usersManager.getAll()
    res.render('users', {users});
})

router.get('/courses', async(req,res)=> {
    const courses = await coursesManager.getAll();
    res.render('courses', {courses});
})

export default router;