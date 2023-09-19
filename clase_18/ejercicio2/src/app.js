import express from 'express';
import session from 'express-session';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:'SecretCoder',
    resave:true,
    saveUninitialized:true
}));

app.get('/', (req,res)=> {
    const name = req.query.name;

    if (!req.session.user) {
        req.session.user = {
            name
        }
        req.session.counter = 1;
        return res.send(`Bienvenido, ${req.session.user.name}`)
    } else {
        req.session.counter++;
        return res.send(`Hola ${req.session.user.name}. Has visitado esta ruta ${req.session.counter} veces`)
    }
})

app.listen(8080, ()=> {
    console.log('on');
})