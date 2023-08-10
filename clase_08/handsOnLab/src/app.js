import express from 'express'
import usersRouter from './routes/users.js'
import petsRouter from './routes/pets.js'

const app = express();

app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

const server = app.listen(8080, ()=> {
    console.log('Server ON')
});