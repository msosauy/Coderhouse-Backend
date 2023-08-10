import { Router } from 'express';
import { uploader } from '../utils.js';

const router = Router();

const pets = [];

router.use((req, res, next) => {
    console.log('Hola desde router de mascotas');
    next();
})

router.get('/', (req, res) => {
    res.send({pets});
})

router.post('/', uploader.single('thumbnail'), (req, res) => {
    const pet = req.body;
    pet.thumbnail = `http://localhost:8080/static/images/${req.file.filename}`
    pets.push(pet);
    res.send({status: 'success'})
})

export default router;