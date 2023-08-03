import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
})

app.get('/saludo', (req, res) => {
    res.send('Hola! Estoy desde express');
})

app.get('/login', (req, res) => {
    res.send('Logueado correctamente');
})

app.listen(8080, () => {
    console.log('Servidor arriba en puerto 8080')
});