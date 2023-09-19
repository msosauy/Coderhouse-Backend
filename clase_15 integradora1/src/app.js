import express from "express";
import __dirname from './utils.js'
import viewsRouter from './routes/views.js'
import usersRouter from './routes/users.js'
import coursesRouter from './routes/courses.js'
import mongoose from "mongoose";
import handlebars from 'express-handlebars'

const app = express();
const PORT = 8080;
const connection = mongoose.connect('mongodb+srv://CoderUser:123456QWE@clustercursobackend.tptn8sm.mongodb.net/primerPracticaIntegradora')

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

app.use('/', viewsRouter);
app.use('/api/users', usersRouter);
app.use('/api/courses', coursesRouter);

const server = app.listen(PORT, ()=> {
    console.log('Serven ON');
})