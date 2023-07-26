class TicketManager {
  #precioBaseDeGanancia = 0.15;

  constructor() {
    this.eventos = [];
  }

  getEventos = () => {
    return this.eventos;
  };

  agregarEvento = ( nombre, lugar, precio, capacidad = 50, fecha = new Date().toLocaleDateString()) => {
    const evento = {nombre, lugar, precio: precio * this.#precioBaseDeGanancia, capacidad, fecha, participantes: []};

    if (this.eventos.length === 0) {
      evento.id = 1;
    } else {
      evento.id = this.eventos[this.eventos.length - 1].id + 1;
    }

    this.eventos.push(evento);
  };

  agregarUsuario = (idEvento, idUsuario) => {
    const enventoIndex = this.eventos.findIndex((e) => e.id === idEvento); //findIndex devuelve -1 si no encuentra el elemento y devuelve el index si lo encuentra
    if (enventoIndex === -1) {
      console.log(
        "Evento no encontrado, debe crear el evento antes de agregar un usuario"
      );
      return;
    }

    const usuarioRegistrado =
      this.eventos[enventoIndex].participantes.includes(idUsuario); //includes devuelve true o false

    if (usuarioRegistrado) {
      console.log("El usuario ya está registrado");
      return;
    }

    this.eventos[enventoIndex].participantes.push(idUsuario);
  };

  ponerEventoEnGira = (idEvento, nuevaLocalidad, nuevaFecha) => {
    const enventoIndex = this.eventos.findIndex((e) => e.id === idEvento); //findIndex devuelve -1 si no encuentra el elemento y devuelve el index si lo encuentra

    if (enventoIndex === -1) {
      console.log(
        "Evento no encontrado, debe crear el evento antes de iniciar la gira"
      );
      return;
    }

    const eventoElegido = this.eventos[enventoIndex];
    const newEvento = {
      ...eventoElegido,
      lugar: nuevaLocalidad,
      fecha: nuevaFecha,
      id: this.eventos[this.eventos.length - 1].id + 1,
      participantes: [],
    };

    this.eventos.push(newEvento);
  };
}

const manejadorDeEventos = new TicketManager();
manejadorDeEventos.agregarEvento("Evento coder 1", "Argentina", 2000, 100);
manejadorDeEventos.agregarUsuario(1, 2);
manejadorDeEventos.agregarUsuario(1, 3);
manejadorDeEventos.ponerEventoEnGira(1, "Mexico", "22/07/2023");
console.log(manejadorDeEventos.getEventos());
