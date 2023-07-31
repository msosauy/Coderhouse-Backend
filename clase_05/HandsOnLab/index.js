const ManagerUsuarios = require("./managers/managerUsuarios");

const manager = new ManagerUsuarios();

const crearUsuarios = async() => {
    let consultaUsuarios = await manager.consultarUsuarios();
    console.log(consultaUsuarios);

    let user = {
        nombre: 'Matias',
        apellido: 'Camusso',
        nombreUsuario: 'user1',
        contrasena: '1234'
    };
    await manager.crearUsuario(user);
    let segundaConsultaUsuarios = await manager.consultarUsuarios();
    console.log(segundaConsultaUsuarios);
    await manager.validarUsuario('user1', '1234'); //correcto
    await manager.validarUsuario('user2', 'dadasda'); //mal nombre de usuario
    await manager.validarUsuario('user1', '12345'); //mal contraseña
}

crearUsuarios();