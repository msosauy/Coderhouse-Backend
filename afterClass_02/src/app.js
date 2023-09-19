import express from 'express';
import handlebars from "express-handlebars";
import path from "path";
import utils from './utils.js';
import viewsRoute from './routes/views.js'
import { Server } from "socket.io";
import ProductManager from './manager/productManager.js';

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(utils.__dirname, 'public')))

//Config handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', path.join(utils.__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use('/', viewsRoute);


const server = app.listen(8080, () => {
    console.log('Server ON')
})

const io = new Server(server);

const productManager = new ProductManager();

io.on('connection', async (socket) => {
    console.log('Nuevo cliente conectado')

    const products = await productManager.getProducts();
    io.emit('productsList', products);

    socket.on('sendProduct', async (product) => {
        await productManager.addProduct(product);

        const products = await productManager.getProducts();

        io.emit('productsList', products);
    })
});