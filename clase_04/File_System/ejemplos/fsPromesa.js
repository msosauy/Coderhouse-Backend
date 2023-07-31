const fs = require('fs');

const path = "sampleFIles/ejemplo.txt";

const operacionesAsincronas = async () => {
    try {
        await fs.promises.writeFile(path, 'Hola desde promesa');

        let resultado = await fs.promises.readFile(path, 'utf-8');
        console.log(resultado);

        await fs.promises.appendFile(path, '. Contenido adicional');

        resultado = await fs.promises.readFile(path, 'utf-8');
        console.log(resultado);

        await fs.promises.unlink(path)
    } catch (error) {
        console.log(error);
    }
}

operacionesAsincronas();

console.log("hola");