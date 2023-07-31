const fs = require('fs');

const fecha = new Date().toLocaleDateString();
const hora = new Date().toLocaleTimeString();

const path = 'archivos/fecha.txt';

fs.writeFile(path, `Fecha: ${fecha} - Hora: ${hora}`,(error) => {
    if (error) {
        console.error(error);
    }
    fs.readFile(path, 'utf-8', (error, data) => {
        if (error) {
            console.error(error);
        }
        console.log(data);
    })
})