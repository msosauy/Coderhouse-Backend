import { Router } from "express";
import { userModel } from "../models/user.js";
import { createHash, isValidPassword } from "../utils.js";
import passport from "passport";

const router = Router();

router.post('/login', passport.authenticate('login', {failureRedirect: '/failLogin'}) ,async (req, res) => {
    if (!req.user) {
        return res.status(400).send({status: "error", error: "Credenciales invalidas"});
    }
    delete req.user.password;
    req.session.user = req.user;
    res.send({status: "success", payload: req.user})
})
router.get('/failLogin', (req,res)=> {
    res.send({error: "Failed login"})
})

router.post('/register', passport.authenticate('register', {failureRedirect: '/failRegister'}) ,async (req, res) => {
    res.send({status: "success", message: "Usuario registrado"})
})

router.get('/failRegister', async(req, res)=> {
    console.log("Fallo la estrategia");
    res.send({error:"Failed register"});
})

router.post('/restartPassword', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({ status: "error", error: "Datos incompletos" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(404).send({ status: "error", error: "No existe el usuario" });
    }
    const passwordHash = createHash(password);
    await userModel.updateOne({ email }, { $set: { password: passwordHash } })
})

export default router;