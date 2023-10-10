import express from 'express';
import { generateToken, authToken } from './utils.js';

const app = express();
app.use(express.json())

app.listen(8080, () => {
    console.log('Server On')
})

app.use(express.static('./src/public'))

const users = [];

app.post('/register', (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    const user = {
        name,
        email,
        password
    }
    users.push(user);
    const accessToken = generateToken(user);
    res.send({ status: 'success', accessToken });
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email == email && user.password == password);
    if (!user) {
        return res.status(401).send({ status: 'error' });
    }
    const accessToken = generateToken(user);
    res.send({ status: 'success', accessToken });
})

app.get('/current', authToken, (req, res) => {
    res.send({ status: "success", payload: req.user })
})