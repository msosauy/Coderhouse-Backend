const persona = {
    nombre: 'Matias',
    edad: 26,
    ciudad: 'Cordoba'
};

// Usando el operador de rest para extraer propiedades
const { nombre } = persona;
// console.log(nombre);

// Usando el operador de spread para combinar objetos
const detallesAdicionales = {
    ocupacion: 'Desarrollador',
    hobby: 'Jugar play station'
};

const actualizarPersona = {
    ...persona,
    ...detallesAdicionales
};

// console.log(actualizarPersona);



  const nuevaPersona = { ...persona };
  persona.nombre = 'Julieta';
  console.log(nuevaPersona.nombre);

  const array = [1, 2, 3];

  const array2 = [ ...array, 4];

  console.log(array2);