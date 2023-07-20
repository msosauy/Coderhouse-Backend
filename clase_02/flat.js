//Elimina la anidación de arrays
//Fue agregó en ES10

let arrayAnidado = [1, 56, 7, 23, [76, 567, 34, 34], [345, 65, 23], 345, 87];

console.log(arrayAnidado.flat());

arrayAnidado.flat().forEach(el => {
    console.log(el);
});