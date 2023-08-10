import express from 'express'
import usersRouter from './routes/users.js'
import petsRouter from './routes/pets.js'
import __dirname from './utils.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/static',express.static(`${__dirname}/public`));

app.use((req, res, next)=> {
    console.log('Hola desde app');
    next();
})

app.use((err, req, res, next)=> {
    console.error(err);
    res.status(500).send('Algo salio mal');
})

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

const server = app.listen(8080, ()=> {
    console.log('Server ON, port 8080')
});