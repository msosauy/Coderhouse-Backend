import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let frase = 'Frase inicial';

app.get('/api/frase', (req, res) => {
    res.send({ frase });
});

app.get('/api/palabras/:pos', (req, res) => {
    const pos = req.params.pos;
    if (isNaN(pos)) {
        return res.status(400).send({ status: 'error', error: 'Pos debe ser un número' })
    }

    const parsedPos = parseInt(pos);
    const palabras = frase.split(' ');

    if (parsedPos <= 0 || parsedPos > palabras.length) {
        return res.status(400).send({ status: 'error', error: 'Posicion fuera del rango de la frase' })
    }

    res.send({ palabra: palabras[parsedPos - 1] });
});

app.post('/api/palabras', (req, res) => {
    const palabra = req.body.palabra;

    if(frase) {
        frase = `${frase} ${palabra}`
    } else {
        frase = palabra
    }
    
    res.send({ palabra, pos: frase.split(' ').length });
})

app.put('/api/palabras/:pos', (req, res) => {
    const pos = req.params.pos;
    const palabra = req.body.palabra;
    if (isNaN(pos)) {
        return res.status(400).send({ status: 'error', error: 'Pos debe ser un número' })
    }
    const parsedPos = parseInt(pos);
    const palabras = frase.split(' ');
    if (parsedPos <= 0 || parsedPos > palabras.length) {
        return res.status(400).send({ status: 'error', error: 'Posicion fuera del rango de la frase' })
    }
    const anterior = palabras[parsedPos - 1];
    palabras[parsedPos - 1] = palabra;
    frase = palabras.join(' ');
    res.send({ actualizada: palabra, anterior });
})

app.delete('/api/palabra/:pos', (req, res) => {
    const pos = req.params.pos;

    if (isNaN(pos)) {
        return res.status(400).send({ status: 'error', error: 'Pos debe ser un número' })
    }

    // const parsedPos = +pos;
    const parsedPos = parseInt(pos);
    const palabras = frase.split(' ');
    if (parsedPos <= 0 || parsedPos > palabras.length) {
        return res.status(400).send({ status: 'error', error: 'Posicion fuera del rango de la frase' })
    }

    const palabraEliminada = palabras[parsedPos - 1];
    palabras.splice(parsedPos - 1, 1);

    frase = palabras.join(' ');

    res.send({ status: 'success', eliminada: palabraEliminada });
});

app.listen(8080, () => {
    console.log('Servidor en puerto 8080');
})