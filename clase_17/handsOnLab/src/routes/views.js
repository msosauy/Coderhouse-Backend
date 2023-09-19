import { Router } from "express";
import { studentsModel } from "../models/students.js";

const router = Router();

router.get('/students', async (req, res) => {
    const { page = 1 } = req.query;
    const { docs, hasPrevPage, hasNextPage, nextPage, prevPage } = await studentsModel.paginate({}, { limit: 10, page })
    res.render('students', { docs, hasPrevPage, hasNextPage, nextPage, prevPage });
})

export default router;