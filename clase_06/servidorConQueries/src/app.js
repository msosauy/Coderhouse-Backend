import express from "express";

const app = express();

app.use(express.urlencoded({extended: true}));

const usuarios = [
    { id: 1, nombre: 'Dan', apellido: 'Espinosa', edad: 38, genero:'M' },
    { id: 2, nombre: 'Chloe', apellido: 'Deker', edad: 32, genero:'F' },
    { id: 3, nombre: 'Ella', apellido: 'Lopez', edad: 30, genero:'F' },
    { id: 4, nombre: 'Matias', apellido: 'Camusso', edad: 25, genero:'M' },
    { id: 5, nombre: 'Juan', apellido: 'Perez', edad: 32, genero:'M' },
    { id: 6, nombre: 'Camila', apellido: 'Lopez', edad: 30, genero:'F' },
]

app.get('/', (req, res) => {
    res.send(`Servidor ON`)
})

app.get('/usuarios', (req, res) => {
    let genero = req.query.genero;

    if(!genero || (genero !== 'M' && genero !== 'F')) {
        res.send(usuarios);
        return;
    }

    let usuariosFiltradros = usuarios.filter(usuario => usuario.genero === genero);

    res.send(usuariosFiltradros);
})

app.listen(8080, () => {
    console.log('Servidor en puerto 8080')
})