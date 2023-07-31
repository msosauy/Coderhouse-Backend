let cadena = "          Hola alumnos   "
console.log(cadena);
console.log(cadena.trim());

let cadenaVacia = "    4   ";
if (cadenaVacia.trim()) {
    console.log("La cadena de caracteres tiene valores")
} else {
    console.log("La cadena de caracteres esta vacia")
}



let arrayAnidado = [1,3, 67, 48, [4, 4, 7, 87], [133]];

const arraySinAnidacion = [ ...arrayAnidado.flat(), 6, 7 ];
console.log(arrayAnidado.flat());
console.log(arraySinAnidacion);