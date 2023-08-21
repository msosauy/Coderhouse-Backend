import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import viewsRoute from './routes/views.js'
import { Server } from "socket.io";

const app = express();

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.static(__dirname + '/public'));

app.use('/', viewsRoute);

const server = app.listen(8080, () => {
    console.log('Server ON')
})

const socketServer = new Server(server);

socketServer.on('connection', socket => {
    console.log('Nuevo cliente conectado')
    socket.on('message', data => {
        console.log(data);
    })

    socket.emit('eventoParaSocketIndividual', 'Este mensaje solo lo debe recibir el socket');
    socket.broadcast.emit('eventoParaTodosMenosElSocketActual', 'Este evento es para todos los sockets conectados MENOS el socket desde el que se envia el mensaje')
    socketServer.emit('eventoParaTodos', 'Mensaje que recibiran todos los socket')
})

