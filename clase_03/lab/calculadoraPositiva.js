//SUMA
const suma = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 === 0 || num2 === 0) {
            reject("Los valores no pueden ser cero")
        }
        if ((num1 + num2) < 0) {
            reject("La calculadora no suma números negativos")
        }
        resolve(num1 + num2)
    })
}

//RESTA
const resta = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 === 0 || num2 === 0) {
            reject("Los valores no pueden ser cero")
        }
        if ((num1 - num2) < 0) {
            reject("La calculadora no resta números negativos")
        }
        resolve(num1 - num2)
    })
}

//MULTIPLICACIÓN
const multiplicacion = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 === 0 || num2 === 0) {
            reject("Los valores no pueden ser cero")
        }
        if ((num1 < 0 || num2 < 0) < 0) {
            reject("La calculadora no multiplica números negativos")
        }
        resolve(num1 * num2)
    })
}

//DIVISION
const division = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 === 0 || num2 === 0) {
            reject("Los valores no pueden ser cero")
        }
        if ((num1 < 0 || num2 < 0) < 0) {
            reject("La calculadora no multiplica números negativos")
        }
        resolve(num1 / num2)
    })
}

const calculos = async () => {
    try {
        const num1 = 10;
        const num2 = 2;

        const resultSuma = await suma(num1, num2)
        console.log(resultSuma);
    } catch (error) {
        console.error(error);
    }

}

calculos();