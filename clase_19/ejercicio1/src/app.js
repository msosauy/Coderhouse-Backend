import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';

const app = express();

app.use(session({
    store: MongoStore.create({
        mongoUrl: 'Tu URL de mongo',
    }),
    secret: 'CoderSecret',
    resave: false,
    saveUninitialized: false
}))

app.get('/login/:user', (req, res)=> {
    req.session.user = req.params.user;
    res.send('Session set');
});

app.get('/test', (req, res)=> {
    if (req.session.user) {
        return res.send(`El usuario logueado es ${req.session.user}`);
    }

    res.send('No hay usuario logueado')
    
});

const server = app.listen(8080, ()=> {
    console.log('Server ON')
})