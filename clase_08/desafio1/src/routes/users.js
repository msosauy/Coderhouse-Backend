import { Router } from 'express';

const router = Router();

const users = [];

router.use((req, res, next) => {
    console.log('Hola desde router de usuarios');
    next();
})

const saludar = (req, res, next) => {
    console.log('Hola desde endpoint')
    next();
}

router.get('/',  saludar,(req, res) => {
    res.send({users});
})

router.post('/', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send({status: 'success'})
})

export default router;