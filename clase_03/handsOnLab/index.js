class TicketManager {

    #precioBaseDeGanancia = 0.15;

    constructor() {
        this.eventos = [];
    }

    getEventos = () => {
        return this.eventos;
    }

    agregarEventos = (nombre, lugar, precio, capacidad = 50, fecha = new Date().toLocaleDateString()) => {
        const evento = {
            nombre,
            lugar,
            precio: precio + precio * this.#precioBaseDeGanancia,
            capacidad,
            fecha,
            participantes: []
        }

        if (this.eventos.length === 0) {
            evento.id = 1;
        } else {
            evento.id = this.eventos[this.eventos.length - 1].id + 1;
        }
        console.log(evento);
        this.eventos.push(evento);
    }

    agregarUsuario = (idEvento, idUsuario) => {
        const eventoIndex = this.eventos.findIndex(e => e.id === idEvento);
        if (eventoIndex === -1) {
            console.log('Evento no encontrado');
            return;
        }
        const eventoElegido = this.eventos[eventoIndex];

        const usuarioRegistrado = eventoElegido.participantes.includes(idUsuario);
        if (usuarioRegistrado) {
            console.log("Usuario registrado");
            return;
        }
        eventoElegido.participantes.push(idUsuario);
    }

    ponerEventoEnGira = (idEvento, nuevaLocalidad, nuevaFecha) => {
        const eventoIndex = this.eventos.findIndex(e => e.id === idEvento);
        if (eventoIndex === -1) {
            console.log('Evento no encontrado');
            return;
        }

        const eventoElegido = this.eventos[eventoIndex];
        const newEvento = {
            ...eventoElegido,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            id: this.eventos[this.eventos.length - 1].id + 1,
            participantes: []
        }
        this.eventos.push(newEvento);
    }
}

const manejadorDeEventos = new TicketManager()
manejadorDeEventos.agregarEventos('Evento coder 1', 'Argentina', 2000, 100);
manejadorDeEventos.agregarUsuario(1, 2);
manejadorDeEventos.agregarUsuario(1, 3);
manejadorDeEventos.ponerEventoEnGira(5, 'Mexico', '23/07/2023');
console.log(manejadorDeEventos.getEventos());

