let valoresBase = [1, 2, 3, 4, 5, 6];
let nuevosValores = valoresBase.map((numero, indice) => numero ** indice);
console.log(nuevosValores);

let nombreBuscado = 'Matias';
let nombre = ['Juan', 'Camilo', 'Maria', 'Ana']
if (nombre.includes(nombreBuscado)) {
    console.log(`Existe el nombre ${nombreBuscado}`);
} else {
    console.log(`No existe el nombre ${nombreBuscado}`);
}