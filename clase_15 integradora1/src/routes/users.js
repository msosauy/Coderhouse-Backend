import { Router } from "express";
import Users from "../managers/users.js";
import { uploader } from "../utils.js";

const router = Router();
const usersManager = new Users();

router.get('/', async (req, res) => {
    const users = await usersManager.getAll();
    res.send({ status: "success", payload: users });
})

router.post('/', uploader.single('thumbnail') ,async(req,res)=> {
    try {
        const photoRoute = `http://localhost:8080/images/${req.file.filename}`
        const result = await usersManager.saveUsers(req.body, photoRoute);
        res.send({status:"success", payload:result});
    } catch (error) {
        res.status(500).send({status:"error", error});
    }
})

export default router;