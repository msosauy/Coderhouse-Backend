import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'

import usersRouter from './routes/users.js';
import viewsRouter from './routes/views.js'

const app = express();

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use('', viewsRouter)
app.use('/api/users', usersRouter)

const server = app.listen(8080, () => {
    console.log('Server ON')
})