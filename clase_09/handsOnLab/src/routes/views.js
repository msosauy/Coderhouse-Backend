import { Router } from 'express';

const router = Router();

const foods = [
    { name: "Pizza", price: 12.99 },
    { name: "Hamburguesa", price: 8.75 },
    { name: "Ensalada", price: 7.50 },
    { name: "Pasta", price: 10.25 },
    { name: "Taco", price: 4.50 }
];

router.get('/', (req, res) => {
    const user = {
        name: 'Hilda',
        lastName: 'Martinez',
        role: 'admin'
    }

    res.render('index', {
        user,
        isAdmin: user.role === 'admin',
        foods,
        style: 'index.css'
    })
})

export default router