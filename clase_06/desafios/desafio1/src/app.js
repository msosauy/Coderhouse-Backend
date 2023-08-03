import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send('Desafio 1');
});

app.get('/bienvenida', (req,res) => {
    res.send(`<h1 style="color:blue";>Bienvenido a mi primer servidor en express</h1>`)
});

app.get('/usuario', (req,res) => {
    const usuario = {
        nombre: 'Miguel',
        apellido: 'Perez',
        edad: 30,
        correo: 'miguelperez@gmail.com'
    }
    res.send(usuario)
});

app.listen(8080, () => {
    console.log('Servidor arriba en puerto 8080')
})