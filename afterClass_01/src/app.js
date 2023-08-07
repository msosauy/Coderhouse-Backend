import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let articulos = [];
let ultimoId = 0

app.get('/', (req, res) => {
    res.send('Server ON')
})

app.get('/articulos', (req, res) => {
    res.send({ articulos });
})

app.post('/articulos', (req, res) => {
    const articulo = req.body;

    articulo.id = ultimoId + 1;
    ultimoId++;
    articulos.push(articulo);

    res.send({ articulos });
})

app.put('/articulos/:idArticulo', (req, res) => {
    const id = +req.params.idArticulo;
    const articulo = req.body;

    const indexArticulo = articulos.findIndex(articulo => articulo.id == id)

    articulo.id = articulos[indexArticulo].id;
    articulos[indexArticulo] = articulo;

    res.send(articulos[indexArticulo]);
})

app.delete('/articulos/:idArticulo', (req, res) => {
    const id = +req.params.idArticulo;

    const newArrayArticulos = articulos.filter(articulo => articulo.id !== id)

    if (articulos.length === newArrayArticulos.length) {
        return res.status(400).send({ status: 'Error', mensaje: `No se encontro articulo con el id ${id}` })
    }

    articulos = newArrayArticulos;

    res.send({ articulos });
})

const port = 8080;

app.listen(port, () => {
    console.log('Servidor funcionando en port', port);
})