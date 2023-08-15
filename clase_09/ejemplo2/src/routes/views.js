import { Router } from "express";

const router = Router();

router.get('/registro', (req, res) => {
    res.render('register')
})

export default router;