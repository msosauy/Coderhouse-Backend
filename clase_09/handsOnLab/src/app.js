import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import viewsRoute from './routes/views.js'

const app = express();

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.use('/views', viewsRoute);

const server = app.listen(8080, () => {
    console.log('Server ON')
})