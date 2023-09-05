import express from 'express'
import usersRouter from './routes/users.js'
import mongoose from 'mongoose'

const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/api/users', usersRouter);

mongoose.connect('mongodb+srv://CoderUser:123456QWE@clustercursobackend.tptn8sm.mongodb.net/colegio')

const server = app.listen(PORT, ()=>{
    console.log(`Servidor ON en puerto ${PORT}`);
})