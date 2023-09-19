import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import mongoose from 'mongoose';
import viewsRouter from './routes/views.js'

const app = express();

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/', viewsRouter)

const connection = mongoose.connect('mongodb+srv://CoderUser:123456QWE@clustercursobackend.tptn8sm.mongodb.net/mongoAvanzado2ejercicio1',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const server = app.listen(8080,()=>console.log(`Listening on 8080`));