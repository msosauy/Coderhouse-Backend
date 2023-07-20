//TRIM function
//Elimina todos los espacios vacios al inicio y al final.
//No elimina los espacios en el contenido
//Fue agregó en ES10

let cadena = "     Hola, bienvenidos!!    ";

console.log(cadena);
console.log(cadena.trim());

let cadenaVacia = "      ";

if (cadenaVacia.trim()) {
    console.log("La cadena tiene valores");
}else {
    console.log("La cadena no tiene valores");
}