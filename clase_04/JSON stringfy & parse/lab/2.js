const fs = require('fs')
const Blob = require('buffer').Blob;

const readPath = './archivos/package.json';
const writePath = './archivos/info.json';

const manejoJson = async () => {
    try {
        const data = await fs.promises.readFile(readPath, 'utf-8');
        const info = {
            contenidoStr: data,
            contenidoObj: JSON.parse(data),
            size: new Blob([data]).size,
        }
        console.log(Math.ceil((info.size * 8) / 1000),"Mb");
        console.log(JSON.parse(info.contenidoStr));
        await fs.promises.writeFile(writePath, JSON.stringify(info));
    } catch (error) {
        throw new Error(error);
    }
}

manejoJson();