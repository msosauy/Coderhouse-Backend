// 1
function mostrarLista(lista) {
  if (lista.length === 0) {
    console.log('lista vacía')
  } else {
    console.log(lista)
  }
};

mostrarLista([1, 2, 3]);
mostrarLista([]);
// sin el ; falla el prox ejercicio !
// ojo con los IIFE !

// 2

(function (lista) {
  if (lista.length === 0) {
    console.log('lista vacía')
  } else {
    console.log(lista)
  }
})([4, 5, 6])

// 3
function crearMultiplicador(num1) {
  return function (num2) {
    console.log("num2", num2);
    return num1 * num2
  }
}

const duplicar = crearMultiplicador(2)

const multiplicador = 3;

console.log(`Resultado de multiplicar 2 por ${multiplicador}`, duplicar(multiplicador))
console.log("Resultado de multiplicar 2 por" + multiplicador, duplicar(multiplicador))
console.log(`Resultado de duplicar`, duplicar(4))

const triplicar = crearMultiplicador(3)

console.log(`Resultado de triplicar`,triplicar(3))
console.log(`Resultado de triplicar`,triplicar(4))