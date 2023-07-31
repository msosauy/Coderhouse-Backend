//file system y aviene incluido en NODEjs

const fs = require("fs");

//SÍNCRONO

//CREAR ARCHIVO
fs.writeFileSync("PATH/file.extension", "Texto en el archivo");
//LLER ARCHIVO
fs.readFileSync("PATH/file.extension", "utf-8")
//BUSCA UN ARCHIVO (boolean)
fs.existsSync("PATH/file.extension")
//AGREGAR TEXTO AL ARCHIVO
fs.appendFileSync("PATH/file.extension", "Texto a agregar")
//ELIMINAR ARCHIVO
fs.unlinkSync("PATH/file.extension");

//CALLBACKS ASÍNCRONOS

//CREAR ARCHIVO
fs.writeFile("PATH/file.extension", "Texto en el archivo", (error) => {execute});
//LLER ARCHIVO
fs.readFile("PATH/file.extension", "utf-8", (error, resultado) => {execute})
//AGREGAR TEXTO AL ARCHIVO
fs.appendFile("PATH/file.extension", "Texto a agregar", (error) => {execute})
//ELIMINAR ARCHIVO
fs.unlink("PATH/file.extension", (error) => {execute});

//PROMESA (ver fsPromesa.js)