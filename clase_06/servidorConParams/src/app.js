import express from "express";

const app = express();

const usuarios = [
    { id: 1, nombre: 'Dan', apellido: 'Espinosa', edad: 38 },
    { id: 2, nombre: 'Chloe', apellido: 'Deker', edad: 32 },
    { id: 3, nombre: 'Ella', apellido: 'Lopez', edad: 30 },
]

app.get('/', (req, res) => {
    res.send(`Servidor ON`)
})

app.get('/usuarios', (req, res) => {
    res.send(usuarios)
})

app.get('/usuarios/:idUsuario', (req, res) => {
    const idUsuario = +req.params.idUsuario;
    let usuario = usuarios.find(usuario => usuario.id === idUsuario);

    if (!usuario) {
        res.send(`No existe el usuario con el id ${idUsuario}`);
        return;
    }

    res.send(usuario);
})

app.listen(8080, () => {
    console.log('Servidor en puerto 8080')
})