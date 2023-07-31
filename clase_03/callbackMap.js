const numeros = [1, 2, 3, 4, 5];

const funcionCallbackDeMap = (num) => {
    return num * 2;
}


const numerosMultiplicadosPor2 = numeros.map(funcionCallbackDeMap);

console.log(numerosMultiplicadosPor2);