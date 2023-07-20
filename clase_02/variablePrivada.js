//Las variables privadas (#variablePrivada) pueden ser utilizadas solamente dentro del bloque donde fueron declaradas

class Persona {
  #nombreCompleto = 0;

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.#nombreCompleto = `${nombre} ${apellido}`;
  }
  
  obtenerNombreCompleto() {
      return this.#nombreCompleto;
    }

  #obtenerNombreInverso () { //función no alcanzable desde afuera desdde la class
    console.log('localFunction');
  }
}

const persona1 = new Persona('Salvador', 'Sosa');
console.log(persona1.obtenerNombreCompleto());
