// Sincronismo

// console.log("Iniciando tarea");
// console.log("Realizando operacion");
// console.log("Tarea Finalizada");

// Asincronismo

const temporizador = (callback) => {
  setTimeout(() => {
      callback();
  }, 2000);
}

let operacion = () => {
  console.log("Realizando operacion");
}

console.log("Iniciando tarea");
temporizador(operacion);
console.log("Tarea Finalizada");