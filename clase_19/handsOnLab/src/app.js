import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.js'
import sessionsRouter from './routes/sessions.js'

const app = express();
const connection = mongoose.connect('Tu URL de mongo',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname+'/public'));

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');

app.use(session({
    store: MongoStore.create({
        mongoUrl: 'Tu URL de mongo',
        ttl: 3600
    }),
    secret: "CoderSecret",
    resave: false,
    saveUninitialized: false
}))

app.use('/', viewsRouter);
app.use('/api/sessions', sessionsRouter)

const server = app.listen(8080, ()=> {
    console.log('Server ON');
})