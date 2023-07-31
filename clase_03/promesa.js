//Estados de la promesa PENDING, RESOLVED, REJECTED

const dividir = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (divisor === 0) {
        reject("No se puede dividir entre 0");
      } else {
        resolve(dividendo / divisor);
      }
    }, 1000);
  });
};




//Promesa sin timeout

// const dividir = (dividendo, divisor) => {
//   return new Promise((resolve, reject) => {
//     if (divisor === 0) {
//       reject("No se puede dividir entre 0");
//     } else {
//       resolve(dividendo / divisor);
//     }
//   });
// };


//then no bloquea el codigo

// dividir(10, 4)
//   .then((resultado) => {
//     console.log("Resultado: ", resultado);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//   console.log("its working");


//TRY bloquea el codigo hasta que tenga una respuesta (respuesta o error)
  
// const functionAsync = async () => {
//   try {
//     let result = await dividir(10, 5);
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// functionAsync();
