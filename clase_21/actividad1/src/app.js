import express from 'express';
import { generateToken, authToken } from './utils.js';
import handlebars from 'express-handlebars';

const app = express();
app.use(express.json())

app.use(express.static('./src/public'))

app.engine('handlebars',handlebars.engine());
app.set('views','./src/views');
app.set('view engine','handlebars');

app.listen(8080, () => {
    console.log('Server On')
})

const users = [];

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/api/register', (req, res) => {
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

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email == email && user.password == password);
    if (!user) {
        return res.status(401).send({ status: 'error' });
    }
    const accessToken = generateToken(user);
    res.send({ status: 'success', accessToken });
})

app.get('/api/current', authToken, (req, res) => {
    res.send({ status: "success", payload: req.user })
})