class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  static saludoCorto = "Hola";

  saludoCompleto() {
    console.log(`buenas, soy ${this.nombre}`);
  }

  saludoEstatico() {
    console.log(Persona.saludoCorto);
  }
}

const persona1 = new Persona("Manuel", 39);
const persona2 = new Persona("Salvador", 8);

persona1.saludoCompleto();
persona2.saludoCompleto();