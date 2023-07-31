const funcion1 = (callback) => {
    console.log("Función 1 completada.");
    callback();
};

const funcion2 = (callback) => {
    console.log("Función 2 completada.");
    callback();
};

const funcion3 = (callback) => {
    console.log("Función 3 completada.");
    callback();
};

const funcion4 = (callback) => {
    console.log("Función 4 completada.");
    callback();
};

const funcion5 = (abc) => {
    console.log("Función 5 completada.");
    abc();
};

funcion1(() => {
    funcion2(() => {
        funcion3(() => {
            funcion4(() => {
                funcion5(() => {
                    console.log("Todas las funciones han terminado.");
                });
            });
        });
    });
});



// const funcion1 = () => {
//     return new Promise((resolve) => {
//       console.log("Función 1 completada.");
//       resolve();
//     });
//   };
  
//   const funcion2 = () => {
//     return new Promise((resolve) => {
//       console.log("Función 2 completada.");
//       resolve();
//     });
//   };
  
//   const funcion3 = () => {
//     return new Promise((resolve) => {
//       console.log("Función 3 completada.");
//       resolve();
//     });
//   };
  
//   const funcion4 = () => {
//     return new Promise((resolve) => {
//       console.log("Función 4 completada.");
//       resolve();
//     });
//   };
  
//   const funcion5 = () => {
//     return new Promise((resolve) => {
//       console.log("Función 5 completada.");
//       resolve();
//     });
//   };
  
//   funcion1()
//     .then(funcion2)
//     .then(funcion3)
//     .then(funcion4)
//     .then(funcion5)
//     .then(() => {
//       console.log("Todas las funciones han terminado.");
//     });