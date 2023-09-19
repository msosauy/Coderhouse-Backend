import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
// import FileStore from 'session-file-store';
// const fileStorage = FileStore(session)

const app = express();

function auth(req, res, next) {
    if (req.session?.admin) {
        return next();
    }

    return res.status(401).send('error de autorizacion');
}

app.use(cookieParser('CoderSecretCode'));

//session con file storage (Persistencia local)

// app.use(session({
//     store: new fileStorage({path:'./src/sessions', ttl:100, retries:0}),
//     secret: 'secretCoder',
//     resave: true,
//     saveUninitialized: true
// }))

//session con data base (Persistencia en la nube)
app.use(session({
    store: MongoStore.create({
        mongoUrl: 'Tu URL de mongo',
        ttl: 15,
        mongoOptions: {useNewUrlParser: true, useUnifiedTopology: true}
    }),
    secret: 'secretCoder2',
    resave: true,
    saveUninitialized: true
}))

app.get('/setCookie', (req, res) => {
    res.cookie('CoderCookie2', 'Soy una cookie2').send("Soy una cookie llamada pepe");
});

app.get('/getCookie', (req, res) => {
    res.send(req.cookies);
});

app.get('/deleteCookie', (req, res) => {
    res.clearCookie('CoderCookie').send('Se elimino la cookie pepe');
});

app.get('/session', (req, res) => {
    if (req.session.counter) {
        req.session.counter++;
        res.send(`Se ha visitado el sitio ${req.session.counter} veces.`)
    } else {
        req.session.counter = 1;
        res.send('Bienvenido')
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (!err) {
            res.send('Logout ok!');
        } else {
            res.send({ status: 'Logout ERROR', body: err });
        }
    })
})

app.get('/login', (req, res) => {
    const { username, password } = req.query;
    if (username !== 'pepe' || password !== '123456') {
        return res.send('login failed');
    }
    req.session.user = username;
    req.session.admin = false;
    res.send('login success!');
})

app.get('/privado', auth , (req,res) => {
    res.send('si estas viendo esto es porque sos admin')
})

app.listen(8080, () => console.log('On en puerto 8080'))