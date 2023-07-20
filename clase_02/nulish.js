//Al validar datos de esta forma los number son tomados como null.
//Los string y boolean si sirven para realizar la validación

let valorPrueba1 = 0;

let valorAsignado1 = valorPrueba1 || "SIn valor"; //false

console.log(valorAsignado1);

//Para realizar validaciones que contemplen numeros podemos hacer así:

let valorPrueba2 = 10;

let valorAsignado2 = valorPrueba2 ?? "Sin valor"; //0

console.log(valorAsignado2);