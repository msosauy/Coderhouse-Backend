const ManagerUsuarios = require("./managers/managerUsuarios");

const manager = new ManagerUsuarios();

const crearUsuarios = async() => {
    let consultaUsuarios = await manager.consultarUsuarios();
    console.log(consultaUsuarios);

    let user = {
        nombre: 'Pedro',
        edad: '30',
        apellido: 'Perez',
        curso: 'Front'
    };
    await manager.crearUsuario(user);
    let segundaConsultaUsuarios = await manager.consultarUsuarios();
    console.log(segundaConsultaUsuarios);
}

crearUsuarios();