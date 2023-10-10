import { Router } from "express";
import { userModel } from "../models/User.js";
import { createHash, isValidPassword } from "../utils.js";

const router = Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email })
    if (!user) return res.status(401).send({ status: "error", error: "Email incorrecto" });

    if (!isValidPassword(user, password)) {
        return res.status(401).send({ status: 'error', error: 'Contraseña incorrecta' })
    }
    delete user.password;
    req.session.user = user
    res.send({ status: "success", payload: req.session.user })
})

router.post('/register', async (req, res) => {
    const { first_name, last_name, email, age, password } = req.body;
    const exists = await userModel.findOne({ email });
    if (exists) {
        return res.status(400).send({ status: "error", error: "Ya existe usuario con ese email" });
    };
    const user = {
        first_name,
        last_name,
        email,
        age,
        password: createHash(password)
    };
    let result = await userModel.create(user);
    res.send({ status: "success", message: "User registered" })
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