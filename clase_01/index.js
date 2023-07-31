const nombre = "Matias";
let edad = 25;
const precio = 550.44;
const misSeriesFavoritas = ["The last of us", "TWD", "GOT"];
const misPeliculasFavoritas = [
    {
        nombre: "Harry Potter",
        estreno: 2000,
        protagonistas: [
            "Harry potter"
        ],
    },
    {
        nombre: "Harry Potter",
        estreno: 2000,
        protagonistas: [
            "Harry potter"
        ],
    }
]

console.log(nombre);
console.log(edad);
console.log(precio);
console.log(misSeriesFavoritas);
console.log(misPeliculasFavoritas);

edad = edad + 1;

console.log("Edad incrementada", edad);

misSeriesFavoritas.push("Lucifer");

// misSeriesFavoritas = ["The last of us", "TWD", "GOT", "Lucifer"];

console.log("Nuevas series favoritas", misSeriesFavoritas);