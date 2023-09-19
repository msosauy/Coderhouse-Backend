import { Router } from "express";
import Courses from "../managers/courses.js";

const router = Router();
const coursesManager = new Courses();

router.get('/', async(req,res)=> {
    const courses = await coursesManager.getAll();
    res.send({status:"success", payload:courses});
})

router.post('/', async(req,res)=> {
    try {
        const result = await coursesManager.saveCourse(req.body);
        res.send({status:"success", payload:result});
    } catch (error) {
        res.status(500).send({status:"error", error});
    }
})

router.put('/:idCourse/:idUser', async(req,res)=> {
    try {
        const { idCourse, idUser } = req.params;
        const result = await coursesManager.addUserToCourse(idCourse, idUser);
        res.send({status:"success", payload:"Se cargo el estudiandante en el curso"});
    } catch (error) {
        res.status(500).send({status:"error", error});
    }
})

export default router;