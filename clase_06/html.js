const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Hola Mundo desde nodemon askdjaskdja')
})

server.listen(8080, () => {
    console.log('Estamos en linea en el puerto 8080')
})