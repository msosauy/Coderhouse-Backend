const fs = require('fs');

const path = 'Usuarios.json'
class ManagerUsuarios {
    constructor() {

    }
    consultarUsuarios = async () => {
        if (fs.existsSync(path)) {
            const data = await fs.promises.readFile(path, 'utf-8');
            const user = JSON.parse(data);
            return user;
        } else {
            return [];
        }
    }
    crearUsuario = async (usuario) => {
        const users = await this.consultarUsuarios();
        users.push(usuario);
        await fs.promises.writeFile(path, JSON.stringify(users))
    }
}

module.exports = ManagerUsuarios;