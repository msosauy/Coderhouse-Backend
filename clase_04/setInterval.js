// Sincronismo

// console.log("Iniciando tarea");
// console.log("Realizando operacion");
// for (let contador = 0; contador <= 5; contador++) {
//     console.log(contador);
// }
// console.log("Tarea Finalizada");

// Asincronismo

let contador = () => {
  let contador = 1;

  console.log("Realizando operacion");

  let timer = setInterval(() => {
    console.log(contador++);

    if (contador > 5) {
      clearInterval(timer);
    }
  }, 1000);
};

console.log("Iniciando tarea");
contador();
console.log("Tarea Finalizada");
