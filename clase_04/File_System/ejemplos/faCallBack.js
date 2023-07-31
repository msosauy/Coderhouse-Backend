const fs = require('fs');

fs.writeFile('5/ejemploCallBack.txt', '¡Hola desde un callback! nuevo', (error) => {
    if (error) {
        console.log("Error al escribir el archivo");
    }
    fs.readFile('5/ejemploCallBack.txt', 'utf-8', (error, resultado) => {
        if (error) {
            console.log("Error al leer el archivo");
        }
        console.log(resultado);
        fs.appendFile('5/ejemploCallBack.txt', ' editando con callbacks', (error) => {
            if (error) {
                console.log("Error al actualizar el archivo");
            }
            fs.readFile('5/ejemploCallBack.txt', 'utf-8', (error, resultado) => {
                if (error) {
                    console.log("Error al leer el archivo");
                }
                console.log(resultado);
                fs.unlink('5/ejemploCallBack.txt', (error) => {
                    if (error) {
                        console.log('No se pudo eliminar el archivo');
                    }
                })
            })
        })
    })
});

console.log("hola");