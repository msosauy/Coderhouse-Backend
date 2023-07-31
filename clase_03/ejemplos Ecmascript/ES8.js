const persona = {
    nombre: 'Matias',
    edad: 26,
    ciudad: 'Cordoba'
  };
  
  const parLlaveValor = Object.entries(persona);
  console.log("Par llave valor: ", parLlaveValor);
  
  const valores = Object.values(persona);
  console.log("Valores: ", valores);
  
  const llaves = Object.keys(persona);
  console.log("Llaves: ",llaves);

  console.log(persona[llaves[0]]);