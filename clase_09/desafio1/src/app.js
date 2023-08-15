import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'

const app = express();

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.get('/index', (req, res) => {
    let user = {
        name: req.query.name,
        lastName: 'Martinez'
    }

    res.render('index', user);
})

app.get('/menu', (req, res) => {
    let user = {
        name: req.query.name,
        lastName: 'Martinez'
    }

    res.render('menu', user);
})

const server = app.listen(8080, () => {
    console.log('Server ON')
})