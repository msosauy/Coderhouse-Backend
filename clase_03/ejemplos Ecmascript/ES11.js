// let valorPrueba = 0;

// let valorAsignado = valorPrueba ?? 'Sin valor';

// console.log(valorAsignado);


class Persona {

    #nombreCompleto = 0

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.#nombreCompleto = `${nombre} ${apellido}`;
    }

    obtenerNombreCompleto() {
        return this.#nombreCompleto;
    }

    #obtenerNombre() {
    }
}

const persona1 = new Persona('Matias', 'Perez');

console.log(persona1.obtenerNombreCompleto())